import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Image, Alert } from 'react-native';
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

export default function GameDetail() {
    const { id } = useLocalSearchParams();
    const { width } = useWindowDimensions();
    const [game, setGame] = useState<Game | null>(null);
    const [saved, setSaved] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const [hasRated, setHasRated] = useState(false);

    useEffect(() => {
        const gameFound = featuredGames.find(g => g.id === parseInt(id as string));
        if (gameFound) {
            setGame({
                ...gameFound,
                saved: false
            });
            // Carregar avaliação do usuário do localStorage (simulado)
            loadUserRating();
        }
    }, [id]);

    const isMobile = width < 768;

    const toggleSaveGame = () => {
        setSaved(prev => !prev);
    };

    const loadUserRating = () => {
        // Simulando carregamento de avaliação do usuário
        const storedRating = 0; // Valor padrão
        setUserRating(storedRating);
        setHasRated(storedRating > 0);
    };

    const handleRating = (rating: number) => {
        setUserRating(rating);
        setHasRated(true);
        
        Alert.alert('Avaliação registrada!', `Você deu ${rating} estrela(s) para ${game?.name}`);
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

    if (!game) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ color: '#ffffff', textAlign: 'center', marginTop: 20 }}>
                    Carregando...
                </Text>
            </SafeAreaView>
        );
    }

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
                            {renderStars(game.rating)}
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

                    {/* Avaliação do Usuário */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Sua Avaliação</Text>
                        <View style={styles.ratingSection}>
                            <Text style={styles.ratingLabel}>
                                {hasRated ? 'Sua nota:' : 'Dê sua nota:'}
                            </Text>
                            {renderStars(userRating, true, 'large')}
                            {hasRated && (
                                <TouchableOpacity 
                                    style={styles.changeRatingButton}
                                    onPress={() => {
                                        setHasRated(false)
                                        setUserRating(0);
                                    }}
                                >
                                    <Text style={styles.changeRatingText}>
                                        Alterar avaliação
                                    </Text>
                                </TouchableOpacity>
                            )}
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

                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={toggleSaveGame}
                        >
                            <Text style={styles.primaryButtonText}>
                                {saved ? 'Remover da Minha Lista' : 'Adicionar à Minha Lista'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {isMobile && <Navbar />}
            </View>
        </SafeAreaView>
    );
}