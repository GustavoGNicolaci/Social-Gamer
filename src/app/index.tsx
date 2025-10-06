import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Navbar } from '@/components/navbar';
import { styles } from './Styles/homeStyles';
import featuredGames from './json/featuredGames.json';
import recentActivies from './json/recentActivities.json';

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
}

interface Activity {
    id: number;
    user: string;
    action: string;
    time: string;
}

export default function Home() {
    const { width } = useWindowDimensions();
    const [jogos, setJogos] = useState<Game[]>([]);
    const [atividadesRecentes, setAtividadesRecentes] = useState<Activity[]>([]);

    useEffect(() => {
        setJogos(
            featuredGames.map((game) => ({
                ...game,
            }))
        );
        setAtividadesRecentes(
            recentActivies.map((activity) => ({
                ...activity,
            }))
        );
    }, []);
    
    const isMobile = width < 768;

    const handleGamePress = (game: Game) => {
        router.push(`/games/${game.id}` as any);
    };

    const renderGameImage = (game: Game) => {
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
                {/* Navbar Web fica no topo */}
                {!isMobile && <Navbar />}

                <ScrollView
                    style={[
                        styles.scrollView,
                        isMobile && { marginBottom: 80 }
                    ]}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header Hero Section */}
                    <View style={styles.heroSection}>
                        <View style={styles.heroContent}>
                            <Text style={styles.heroTitle}>Bem-vindo ao Social Gamer! 🎮</Text>
                            <Text style={styles.heroSubtitle}>
                                Conecte-se com gamers, participe de comunidades e descubra novos jogos
                            </Text>
                            <View style={styles.heroStats}>
                                <View style={styles.heroStat}>
                                    <Text style={styles.heroStatNumber}>1.2M</Text>
                                    <Text style={styles.heroStatLabel}>Gamers Ativos</Text>
                                </View>
                                <View style={styles.heroStatDivider} />
                                <View style={styles.heroStat}>
                                    <Text style={styles.heroStatNumber}>356</Text>
                                    <Text style={styles.heroStatLabel}>Jogos</Text>
                                </View>
                                <View style={styles.heroStatDivider} />
                                <View style={styles.heroStat}>
                                    <Text style={styles.heroStatNumber}>45K</Text>
                                    <Text style={styles.heroStatLabel}>Comunidades</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Cards de Estatísticas */}
                    <View style={styles.statsContainer}>
                        <View style={[styles.statCard, styles.statCardPrimary]}>
                            <Text style={styles.statNumber}>1.2M</Text>
                            <Text style={styles.statLabel}>Gamers Ativos</Text>
                            <View style={styles.statTrend}>
                                <Text style={styles.statTrendText}>+12% este mês</Text>
                            </View>
                        </View>
                        <View style={[styles.statCard, styles.statCardSecondary]}>
                            <Text style={styles.statNumber}>356</Text>
                            <Text style={styles.statLabel}>Jogos</Text>
                            <View style={styles.statTrend}>
                                <Text style={styles.statTrendText}>+8 novos</Text>
                            </View>
                        </View>
                        <View style={[styles.statCard, styles.statCardTertiary]}>
                            <Text style={styles.statNumber}>45K</Text>
                            <Text style={styles.statLabel}>Comunidades</Text>
                            <View style={styles.statTrend}>
                                <Text style={styles.statTrendText}>+2.1K novas</Text>
                            </View>
                        </View>
                    </View>

                    {/* Jogos em Destaque */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <View>
                                <Text style={styles.sectionTitle}> Jogos em Destaque</Text>
                                <Text style={styles.sectionSubtitle}>Os jogos mais populares da semana</Text>
                            </View>
                            <TouchableOpacity 
                                style={styles.seeAllButton}
                                onPress={() => router.push('/games')}
                            >
                                <Text style={styles.seeAllText}>Ver todos</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView 
                            horizontal 
                            showsHorizontalScrollIndicator={false} 
                            style={styles.horizontalScroll}
                            contentContainerStyle={styles.horizontalScrollContent}
                        >
                            {featuredGames.slice(0, 6).map((game, index) => (
                                <TouchableOpacity 
                                    key={game.id} 
                                    style={[
                                        styles.gameCard,
                                        index === 0 && styles.gameCardFirst,
                                        index === 5 && styles.gameCardLast
                                    ]}
                                    onPress={() => handleGamePress(game)}
                                >
                                    <View style={styles.imageContainer}>
                                        {renderGameImage(game)}
                                        <View style={styles.gameRatingBadge}>
                                            <Text style={styles.gameRatingText}>{game.rating.toFixed(1)}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.gameInfo}>
                                        <Text style={styles.gameName} numberOfLines={1}>{game.name}</Text>
                                        <Text style={styles.gameCategory}>{game.category}</Text>
                                        <View style={styles.gameDetails}>
                                            <Text style={styles.developer} numberOfLines={1}>
                                                {game.developer}
                                            </Text>
                                            <Text style={styles.platforms} numberOfLines={1}>
                                                {game.platforms.join(', ')}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Atividades Recentes */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <View>
                                <Text style={styles.sectionTitle}> Atividades Recentes</Text>
                                <Text style={styles.sectionSubtitle}>O que a comunidade está fazendo</Text>
                            </View>
                        </View>

                        <View style={styles.activitiesContainer}>
                            {atividadesRecentes.map((activity, index) => (
                                <View 
                                    key={activity.id} 
                                    style={[
                                        styles.activityCard,
                                        index === 0 && styles.activityCardFirst,
                                        index === atividadesRecentes.length - 1 && styles.activityCardLast
                                    ]}
                                >
                                    <View style={styles.activityAvatar}>
                                        <Text style={styles.activityAvatarText}>
                                            {activity.user.substring(0, 1).toUpperCase()}
                                        </Text>
                                    </View>
                                    <View style={styles.activityContent}>
                                        <Text style={styles.activityText}>
                                            <Text style={styles.userName}>{activity.user}</Text> {activity.action}
                                        </Text>
                                        <Text style={styles.activityTime}>{activity.time}</Text>
                                    </View>
                                    <View style={styles.activityBadge}>
                                        <Text style={styles.activityBadgeText}>Nova</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Call-to-Action para Login */}
                    <View style={styles.ctaSection}>
                        <View style={styles.ctaContent}>
                            <Text style={styles.ctaTitle}>Junte-se à comunidade! </Text>
                            <Text style={styles.ctaText}>
                                Faça login para conectar-se com amigos, participar de comunidades
                                e acompanhar suas estatísticas de jogo.
                            </Text>
                            <View style={styles.ctaButtons}>
                                <TouchableOpacity
                                    style={styles.ctaButtonPrimary}
                                    onPress={() => router.push('/login')}
                                >
                                    <Text style={styles.ctaButtonPrimaryText}>Fazer Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.ctaButtonSecondary}
                                    onPress={() => router.push('/signup')}
                                >
                                    <Text style={styles.ctaButtonSecondaryText}>Criar Conta</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                {/* Navbar Mobile fixa na parte inferior */}
                {isMobile && <Navbar />}
            </View>
        </SafeAreaView>
    );
}