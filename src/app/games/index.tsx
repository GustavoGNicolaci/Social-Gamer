import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Navbar } from '@/components/navbar';
import { styles } from '../Styles/gamesStyles';
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

export default function Games() {
    const { width } = useWindowDimensions();
    const [jogos, setJogos] = useState<Game[]>([]);

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

    return (
        <SafeAreaView style={styles.container} edges={isMobile ? ['top', 'left', 'right'] : ['top', 'left', 'right', 'bottom']}>
            <View style={styles.container}>
                {!isMobile && <Navbar />}

                <ScrollView
                    style={[
                        styles.scrollView,
                        isMobile && { marginBottom: 100 } // Mais espaço para a navbar mobile
                    ]}
                    contentContainerStyle={[styles.scrollContent, { paddingBottom: 20 }]} // Espaço extra no final
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.welcomeSection}>
                        <Text style={styles.welcomeTitle}>Catálogo de Jogos</Text>
                        <Text style={styles.welcomeSubtitle}>
                            Descubra jogos incríveis e adicione à sua lista de desejos
                        </Text>
                    </View>

                    <View style={styles.gamesGrid}>
                        {jogos.map((game) => (
                            <TouchableOpacity 
                                key={game.id} 
                                style={styles.gameCard}
                                onPress={() => handleGamePress(game)}
                            >
                                <View style={styles.imageContainer}>
                                    {renderGameIcon(game)}
                                </View>
                                
                                <View style={styles.gameInfo}>
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
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>

                {isMobile && <Navbar />}
            </View>
        </SafeAreaView>
    );
}
