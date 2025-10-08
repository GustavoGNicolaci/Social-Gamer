import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Image, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Navbar } from '@/components/navbar';
import { styles } from '../Styles/gamesDStyles';
import featuredGames from '../json/featuredGames.json';

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

interface Review {
    id: number;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    gameId: number;
}

export default function GameDetail() {
    const { id } = useLocalSearchParams();
    const { width } = useWindowDimensions();
    const [game, setGame] = useState<Game | null>(null);
    const [saved, setSaved] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const [hasRated, setHasRated] = useState(false);
    const [reviewComment, setReviewComment] = useState('');
    const [reviews, setReviews] = useState<Review[]>([]);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 3;

    // Simulação de usuário logado
    const currentUser = {
        id: 'user123',
        name: 'João Silva'
    };

    useEffect(() => {
        const gameFound = featuredGames.find(g => g.id === parseInt(id as string));
        if (gameFound) {
            setGame({
                ...gameFound,
                saved: false
            });
            loadUserRating();
            loadReviews();
        }
    }, [id]);

    const isMobile = width < 768;

    const toggleSaveGame = () => {
        setSaved(prev => !prev);
    };

    const loadUserRating = () => {
        // Simulando carregamento de avaliação do usuário
        const storedRating = 0;
        setUserRating(storedRating);
        setHasRated(storedRating > 0);
    };

    const removeRating = () => {
        setReviews(prev => prev.filter(review => review.userId !== currentUser.id));

        setUserRating(0);
        setHasRated(false);
        setShowReviewForm(false);

        Alert.alert('Sucesso!', 'Sua avaliação foi removida.');
    };

    const loadReviews = () => {
        // Simulando reviews existentes
        const mockReviews: Review[] = [
            {
                id: 1,
                userId: 'user456',
                userName: 'Maria Santos',
                rating: 5,
                comment: 'Jogo incrível! Gráficos fantásticos e jogabilidade viciante.',
                date: '2024-01-15',
                gameId: parseInt(id as string)
            },
            {
                id: 2,
                userId: 'user789',
                userName: 'Pedro Costa',
                rating: 4,
                comment: 'Muito bom, mas poderia ter mais modos de jogo.',
                date: '2024-01-10',
                gameId: parseInt(id as string)
            },
            {
                id: 3,
                userId: 'user101',
                userName: 'Ana Oliveira',
                rating: 5,
                comment: 'Melhor jogo que já joguei este ano!',
                date: '2024-01-08',
                gameId: parseInt(id as string)
            },
            {
                id: 4,
                userId: 'user102',
                userName: 'Carlos Lima',
                rating: 3,
                comment: 'Bom, mas esperava mais inovação.',
                date: '2024-01-05',
                gameId: parseInt(id as string)
            },
            {
                id: 5,
                userId: 'user103',
                userName: 'Fernanda Rocha',
                rating: 4,
                comment: 'Excelente para jogar com amigos.',
                date: '2024-01-03',
                gameId: parseInt(id as string)
            }
        ];
        setReviews(mockReviews);
    };

    const handleRating = (rating: number) => {
        setUserRating(rating);
        setHasRated(true);
        setShowReviewForm(true);
    };

    const submitReview = () => {
        if (!reviewComment.trim()) {
            Alert.alert('Erro', 'Por favor, escreva um comentário para sua avaliação.');
            return;
        }

        const newReview: Review = {
            id: Date.now(),
            userId: currentUser.id,
            userName: currentUser.name,
            rating: userRating,
            comment: reviewComment,
            date: new Date().toISOString().split('T')[0],
            gameId: parseInt(id as string)
        };

        setReviews(prev => [newReview, ...prev]);
        setReviewComment('');
        setShowReviewForm(false);
        setCurrentPage(1);

        Alert.alert('Sucesso!', 'Sua avaliação foi publicada.');
    };

    const calculateAverageRating = () => {
        if (reviews.length === 0) return game?.rating || 0;

        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return total / reviews.length;
    };

    // Cálculos para paginação
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const renderStars = (rating: number, interactive = false, size: 'small' | 'large' = 'small') => {
        const stars = [];
        const starSize = size === 'large' ? 32 : 20;

        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => interactive && handleRating(i)}
                    disabled={!interactive}
                    style={styles.starButton}
                >
                    <Text style={[styles.star, { fontSize: starSize }]}>
                        {i <= rating ? '⭐' : '☆'}
                    </Text>
                </TouchableOpacity>
            );
        }

        return (
            <View style={styles.starsContainer}>
                {stars}
                {!interactive && (
                    <Text style={styles.ratingText}>
                        {rating.toFixed(1)}
                    </Text>
                )}
            </View>
        );
    };

    const renderGameHeader = (game: Game) => {
        if (game.image) {
            return (
                <Image
                    source={{ uri: game.image }}
                    style={styles.headerImage}
                    resizeMode="cover"
                />
            );
        }

        return (
            <View style={styles.headerIcon}>
                <View style={styles.gameIcon}>
                    <Text style={styles.gameIconText}>
                        {game.name.substring(0, 2).toUpperCase()}
                    </Text>
                </View>
            </View>
        );
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    };

    // Renderização da paginação
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
                    Página {currentPage} de {totalPages} • {reviews.length} avaliações
                </Text>
                <View style={styles.paginationButtons}>
                    {pages}
                </View>
            </View>
        );
    };

    if (!game) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ color: '#ffffff', textAlign: 'center', marginTop: 20 }}>
                    Carregando...
                </Text>
            </SafeAreaView>
        );
    }

    const averageRating = calculateAverageRating();

    return (
        <SafeAreaView style={styles.container} edges={isMobile ? ['top', 'left', 'right'] : ['top', 'left', 'right', 'bottom']}>
            <View style={styles.container}>
                {!isMobile && <Navbar />}

                <ScrollView
                    style={[
                        styles.scrollView,
                        isMobile && { marginBottom: 100 }
                    ]}
                    contentContainerStyle={[styles.scrollContent, styles.scrollContent]}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header com Imagem */}
                    <View style={styles.header}>
                        {renderGameHeader(game)}

                        <View style={styles.headerContent}>
                            <View style={styles.titleRow}>
                                <Text style={styles.title}>{game.name}</Text>
                                <TouchableOpacity
                                    style={[
                                        styles.saveButton,
                                        saved && styles.savedButton
                                    ]}
                                    onPress={toggleSaveGame}
                                >
                                    <Text style={styles.saveButtonText} numberOfLines={1}>
                                        {saved ? '✓ Na Minha Lista' : '+ Vou Jogar'}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.category}>{game.category}</Text>
                            {renderStars(averageRating)}
                            <Text style={styles.reviewCount}>
                                {reviews.length} {reviews.length === 1 ? 'avaliação' : 'avaliações'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.infoGrid}>
                        <View style={styles.infoCard}>
                            <Text style={styles.infoLabel}>Desenvolvedora</Text>
                            <Text style={styles.infoValue}>{game.developer}</Text>
                        </View>
                        <View style={styles.infoCard}>
                            <Text style={styles.infoLabel}>Ano de Lançamento</Text>
                            <Text style={styles.infoValue}>{game.releaseYear}</Text>
                        </View>
                        <View style={styles.infoCard}>
                            <Text style={styles.infoLabel}>Plataformas</Text>
                            <Text style={styles.infoValue}>{game.platforms.join(', ')}</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Gêneros</Text>
                        <View style={styles.genresContainer}>
                            {game.genres.map((genre, index) => (
                                <View key={index} style={styles.genreTag}>
                                    <Text style={styles.genreText}>{genre}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Sobre o Jogo</Text>
                        <Text style={styles.description}>{game.description}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Sua Avaliação</Text>
                        <View style={styles.ratingSection}>
                            <Text style={styles.ratingLabel}>
                                {hasRated ? 'Sua nota:' : 'Dê sua nota:'}
                            </Text>
                            {renderStars(userRating, true, 'large')}

                            {hasRated && !showReviewForm && (
                                <View style={styles.ratingActions}>
                                    <TouchableOpacity
                                        style={styles.changeRatingButton}
                                        onPress={() => setShowReviewForm(true)}
                                    >
                                        <Text style={styles.changeRatingText}>
                                            {userRating > 0 ? 'Escrever comentário' : 'Avaliar jogo'}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.removeRatingButton}
                                        onPress={removeRating}
                                    >
                                        <Text style={styles.removeRatingText}>Remover Avaliação</Text>
                                    </TouchableOpacity>
                                </View>
                            )}

                            {showReviewForm && (
                                <View style={styles.reviewForm}>
                                    <Text style={styles.reviewFormLabel}>
                                        Comentário (opcional):
                                    </Text>
                                    <TextInput
                                        style={styles.commentInput}
                                        value={reviewComment}
                                        onChangeText={setReviewComment}
                                        placeholder="Compartilhe sua experiência com este jogo..."
                                        placeholderTextColor="#888"
                                        multiline
                                        numberOfLines={4}
                                    />
                                    <View style={styles.reviewFormActions}>
                                        <TouchableOpacity
                                            style={styles.cancelButton}
                                            onPress={() => setShowReviewForm(false)}
                                        >
                                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.submitButton}
                                            onPress={submitReview}
                                        >
                                            <Text style={styles.submitButtonText}>Publicar Avaliação</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>

                    {/* Reviews dos Usuários */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                            Avaliações da Comunidade ({reviews.length})
                        </Text>

                        {reviews.length === 0 ? (
                            <Text style={styles.noReviews}>
                                Seja o primeiro a avaliar este jogo!
                            </Text>
                        ) : (
                            <View style={styles.reviewsList}>
                                {currentReviews.map((review) => (
                                    <View key={review.id} style={styles.reviewItem}>
                                        <View style={styles.reviewHeader}>
                                            <View style={styles.reviewUserInfo}>
                                                <Text style={styles.reviewUserName}>
                                                    {review.userName}
                                                </Text>
                                                <Text style={styles.reviewDate}>
                                                    {formatDate(review.date)}
                                                </Text>
                                            </View>
                                            {renderStars(review.rating)}
                                        </View>
                                        {review.comment && (
                                            <Text style={styles.reviewComment}>
                                                {review.comment}
                                            </Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                        )}

                        {reviews.length > reviewsPerPage && renderPagination()}
                    </View>
                </ScrollView>

                {isMobile && <Navbar />}
            </View>
        </SafeAreaView>
    );
}