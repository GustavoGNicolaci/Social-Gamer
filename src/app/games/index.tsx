import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Image, TextInput, Modal, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Navbar } from '@/components/navbar';
import { styles } from '../Styles/gamesStyles';
import featuredGames from '../json/featuredGames.json';
import gameFilters from '../json/gameFilters.json';

interface Game {
    id: number;
    name: string;
    category: string;
    description: string;
    rating: number;
    developer: string;
    releaseYear: number;
    platforms: string[];
    genres: string[];
    image: string | null;
    saved?: boolean;
}

const GAME_CATEGORIES = gameFilters.categories;
const PLATFORMS = gameFilters.platforms;
const RATING_RANGES = gameFilters.ratings;
const ITEMS_PER_PAGE = 6;

export default function Games() {
    const { width } = useWindowDimensions();
    const [jogos, setJogos] = useState<Game[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [selectedPlatform, setSelectedPlatform] = useState('Todos');
    const [selectedRating, setSelectedRating] = useState(RATING_RANGES[0]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setJogos(featuredGames.map(game => ({
            ...game,
            saved: false
        })));
    }, []);

    const isMobile = width < 768;

    const handleGamePress = (game: Game) => {
        router.push(`/games/${game.id}` as any);
    };

    const toggleSaveGame = (gameId: number, e?: any) => {
        if (e) {
            e.stopPropagation();
        }
        setJogos(prevJogos =>
            prevJogos.map(game =>
                game.id === gameId
                    ? { ...game, saved: !game.saved }
                    : game
            )
        );
    };

    // Filtragem e busca
    const filteredGames = jogos.filter(game => {
        const matchesSearch =
            game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            game.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            game.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            game.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory = selectedCategory === 'Todos' || game.category === selectedCategory;
        const matchesPlatform = selectedPlatform === 'Todos' ||
            game.platforms.some(platform =>
                platform.toLowerCase().includes(selectedPlatform.toLowerCase())
            );
        const matchesRating = game.rating >= selectedRating.min && game.rating <= selectedRating.max;

        return matchesSearch && matchesCategory && matchesPlatform && matchesRating;
    });

    // Cálculos da paginação
    const totalPages = Math.ceil(filteredGames.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentGames = filteredGames.slice(startIndex, endIndex);

    const clearFilters = () => {
        setSelectedCategory('Todos');
        setSelectedPlatform('Todos');
        setSelectedRating(RATING_RANGES[0]);
        setSearchQuery('');
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const hasActiveFilters = selectedCategory !== 'Todos' ||
        selectedPlatform !== 'Todos' ||
        selectedRating !== RATING_RANGES[0] ||
        searchQuery !== '';

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push('⭐');
            } else {
                stars.push('☆');
            }
        }

        return (
            <Text style={styles.rating}>
                {stars.join('')} {rating.toFixed(1)}
            </Text>
        );
    };

    const renderGameIcon = (game: Game) => {
        if (game.image) {
            return (
                <Image
                    source={{ uri: game.image }}
                    style={styles.gameImage}
                    resizeMode="cover"
                />
            );
        }

        return (
            <View style={styles.gameIcon}>
                <Text style={styles.gameIconText}>
                    {game.name.substring(0, 2).toUpperCase()}
                </Text>
            </View>
        );
    };

    const getCardStyle = () => {
        if (isMobile) {
            return styles.gameCard;
        } else {
            return [styles.gameCard, styles.desktopGameCard];
        }
    };

    // Controles de paginação
    const renderPagination = () => {
        if (totalPages <= 1) return null;

        const pages = [];
        const maxVisiblePages = isMobile ? 3 : 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // Botão anterior
        pages.push(
            <TouchableOpacity
                key="prev"
                style={[
                    styles.pageButton,
                    currentPage === 1 && styles.pageButtonDisabled
                ]}
                onPress={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <Text style={[
                    styles.pageButtonText,
                    currentPage === 1 && styles.pageButtonTextDisabled
                ]}>
                    ‹
                </Text>
            </TouchableOpacity>
        );

        // Primeira página
        if (startPage > 1) {
            pages.push(
                <TouchableOpacity
                    key={1}
                    style={styles.pageButton}
                    onPress={() => handlePageChange(1)}
                >
                    <Text style={styles.pageButtonText}>1</Text>
                </TouchableOpacity>
            );
            if (startPage > 2) {
                pages.push(
                    <Text key="ellipsis1" style={styles.pageEllipsis}>...</Text>
                );
            }
        }

        // Páginas
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <TouchableOpacity
                    key={i}
                    style={[
                        styles.pageButton,
                        currentPage === i && styles.pageButtonActive
                    ]}
                    onPress={() => handlePageChange(i)}
                >
                    <Text style={[
                        styles.pageButtonText,
                        currentPage === i && styles.pageButtonTextActive
                    ]}>
                        {i}
                    </Text>
                </TouchableOpacity>
            );
        }

        // Última página
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(
                    <Text key="ellipsis2" style={styles.pageEllipsis}>...</Text>
                );
            }
            pages.push(
                <TouchableOpacity
                    key={totalPages}
                    style={styles.pageButton}
                    onPress={() => handlePageChange(totalPages)}
                >
                    <Text style={styles.pageButtonText}>{totalPages}</Text>
                </TouchableOpacity>
            );
        }

        // Botão próximo
        pages.push(
            <TouchableOpacity
                key="next"
                style={[
                    styles.pageButton,
                    currentPage === totalPages && styles.pageButtonDisabled
                ]}
                onPress={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <Text style={[
                    styles.pageButtonText,
                    currentPage === totalPages && styles.pageButtonTextDisabled
                ]}>
                    ›
                </Text>
            </TouchableOpacity>
        );

        return (
            <View style={styles.paginationContainer}>
                <Text style={styles.paginationInfo}>
                    Página {currentPage} de {totalPages} • {filteredGames.length} jogos
                </Text>
                <View style={styles.paginationButtons}>
                    {pages}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={isMobile ? ['top', 'left', 'right'] : ['top', 'left', 'right', 'bottom']}>
            <View style={styles.container}>
                {!isMobile && <Navbar />}

                <ScrollView
                    style={[
                        styles.scrollView,
                        isMobile && { marginBottom: 100 }
                    ]}
                    contentContainerStyle={[styles.scrollContent, { paddingBottom: 20 }]}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.welcomeSection}>
                        <Text style={styles.welcomeTitle}>Catálogo de Jogos</Text>
                        <Text style={styles.welcomeSubtitle}>
                            Descubra jogos incríveis e adicione à sua lista de desejos
                        </Text>

                        <View style={styles.searchContainer}>
                            <View style={styles.searchInputContainer}>
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="Pesquisar jogos, categorias, desenvolvedores..."
                                    placeholderTextColor="#888"
                                    value={searchQuery}
                                    onChangeText={(text) => {
                                        setSearchQuery(text);
                                        setCurrentPage(1); 
                                    }}
                                />
                            </View>
                            <TouchableOpacity
                                style={[
                                    styles.filterButton,
                                    hasActiveFilters && styles.filterButtonActive
                                ]}
                                onPress={() => setShowFilters(true)}
                            >
                                <Text style={styles.filterButtonText}>
                                    Filtros {hasActiveFilters && '•'}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {hasActiveFilters && (
                            <View style={styles.activeFilters}>
                                <Text style={styles.activeFiltersText}>Filtros ativos:</Text>
                                <TouchableOpacity onPress={clearFilters}>
                                    <Text style={styles.clearFiltersText}>Limpar todos</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                    
                    {/* Modal de Filtros */}
                    <Modal
                        visible={showFilters}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() => setShowFilters(false)}
                    >
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalContent}>
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalTitle}>Filtros</Text>
                                    <TouchableOpacity onPress={() => setShowFilters(false)}>
                                        <Text style={styles.modalClose}>✕</Text>
                                    </TouchableOpacity>
                                </View>

                                <ScrollView style={styles.filtersScroll}>
                                    <View style={styles.filterSection}>
                                        <Text style={styles.filterSectionTitle}>Categoria</Text>
                                        <View style={styles.filterOptions}>
                                            {GAME_CATEGORIES.map(category => (
                                                <TouchableOpacity
                                                    key={category}
                                                    style={[
                                                        styles.filterOption,
                                                        selectedCategory === category && styles.filterOptionSelected
                                                    ]}
                                                    onPress={() => {
                                                        setSelectedCategory(category);
                                                        setCurrentPage(1);
                                                    }}
                                                >
                                                    <Text style={[
                                                        styles.filterOptionText,
                                                        selectedCategory === category && styles.filterOptionTextSelected
                                                    ]}>
                                                        {category}
                                                    </Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </View>

                                    <View style={styles.filterSection}>
                                        <Text style={styles.filterSectionTitle}>Plataforma</Text>
                                        <View style={styles.filterOptions}>
                                            {PLATFORMS.map(platform => (
                                                <TouchableOpacity
                                                    key={platform}
                                                    style={[
                                                        styles.filterOption,
                                                        selectedPlatform === platform && styles.filterOptionSelected
                                                    ]}
                                                    onPress={() => {
                                                        setSelectedPlatform(platform);
                                                        setCurrentPage(1);
                                                    }}
                                                >
                                                    <Text style={[
                                                        styles.filterOptionText,
                                                        selectedPlatform === platform && styles.filterOptionTextSelected
                                                    ]}>
                                                        {platform}
                                                    </Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </View>

                                    <View style={styles.filterSection}>
                                        <Text style={styles.filterSectionTitle}>Avaliação Mínima</Text>
                                        <View style={styles.filterOptions}>
                                            {RATING_RANGES.map((range, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={[
                                                        styles.filterOption,
                                                        selectedRating === range && styles.filterOptionSelected
                                                    ]}
                                                    onPress={() => {
                                                        setSelectedRating(range);
                                                        setCurrentPage(1);
                                                    }}
                                                >
                                                    <Text style={[
                                                        styles.filterOptionText,
                                                        selectedRating === range && styles.filterOptionTextSelected
                                                    ]}>
                                                        {range.label}
                                                    </Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </View>
                                </ScrollView>

                                <View style={styles.modalFooter}>
                                    <TouchableOpacity
                                        style={styles.clearFiltersButton}
                                        onPress={clearFilters}
                                    >
                                        <Text style={styles.clearFiltersButtonText}>Limpar Filtros</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.applyFiltersButton}
                                        onPress={() => setShowFilters(false)}
                                    >
                                        <Text style={styles.applyFiltersButtonText}>Aplicar Filtros</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <View style={styles.resultsInfo}>
                        <Text style={styles.resultsText}>
                            Mostrando {currentGames.length} de {filteredGames.length} jogos
                            {totalPages > 1 && ` • Página ${currentPage} de ${totalPages}`}
                        </Text>
                    </View>

                    <View style={styles.gamesGrid}>
                        {currentGames.map((game) => (
                            <TouchableOpacity
                                key={game.id}
                                style={getCardStyle()}
                                onPress={() => handleGamePress(game)}
                            >
                                <View style={styles.imageContainer}>
                                    {renderGameIcon(game)}
                                </View>

                                <View style={styles.gameInfo}>
                                    <View>
                                        <Text style={styles.gameName} numberOfLines={1}>
                                            {game.name}
                                        </Text>
                                        <Text style={styles.gameCategory}>{game.category}</Text>
                                        {renderStars(game.rating)}

                                        <View style={styles.gameDetails}>
                                            <Text style={styles.developer} numberOfLines={1}>
                                                {game.developer}
                                            </Text>
                                            <Text style={styles.platforms} numberOfLines={1}>
                                                {game.platforms.join(', ')}
                                            </Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity
                                        style={[
                                            styles.saveButton,
                                            game.saved && styles.savedButton
                                        ]}
                                        onPress={(e) => toggleSaveGame(game.id, e)}
                                    >
                                        <Text style={styles.saveButtonText}>
                                            {game.saved ? '✓ Na lista' : '+ Vou Jogar'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Controles de Paginação */}
                    {renderPagination()}

                    {currentGames.length === 0 && (
                        <View style={styles.noResults}>
                            <Text style={styles.noResultsText}>Nenhum jogo encontrado</Text>
                            <Text style={styles.noResultsSubtext}>
                                Tente ajustar os filtros ou a pesquisa
                            </Text>
                            <TouchableOpacity
                                style={styles.clearFiltersButton}
                                onPress={clearFilters}
                            >
                                <Text style={styles.clearFiltersButtonText}>Limpar Filtros</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView>

                {isMobile && <Navbar />}
            </View>
        </SafeAreaView>
    );
}