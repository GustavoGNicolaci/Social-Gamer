import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
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
    players: number;
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
                players: Number(game.players),
            }))
        );
        setAtividadesRecentes(
            recentActivies.map((activity) => ({
                ...activity,
            }))
        );
    }, []);
    
    const isMobile = width < 768;

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
                    {/* Header de Boas-vindas */}
                    <View style={styles.welcomeSection}>
                        <Text style={styles.welcomeTitle}>Bem-vindo ao Social Gamer!</Text>
                        <Text style={styles.welcomeSubtitle}>
                            Conecte-se com gamers, participe de comunidades e descubra novos jogos
                        </Text>
                    </View>

                    {/* Cards de Estatísticas Rápidas */}
                    <View style={styles.statsContainer}>
                        <View style={styles.statCard}>
                            <Text style={styles.statNumber}>1.2M</Text>
                            <Text style={styles.statLabel}>Gamers Ativos</Text>
                        </View>
                        <View style={styles.statCard}>
                            <Text style={styles.statNumber}>356</Text>
                            <Text style={styles.statLabel}>Jogos</Text>
                        </View>
                        <View style={styles.statCard}>
                            <Text style={styles.statNumber}>45K</Text>
                            <Text style={styles.statLabel}>Comunidades</Text>
                        </View>
                    </View>

                    {/* Jogos em Destaque */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Jogos em Destaque</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllText}>Ver todos</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                            {featuredGames.map((game) => (
                                <TouchableOpacity key={game.id} style={styles.gameCard}>
                                    <View style={styles.gameIcon}>
                                        <Text style={styles.gameIconText}>
                                            {game.name.substring(0, 2).toUpperCase()}
                                        </Text>
                                    </View>
                                    <Text style={styles.gameName}>{game.name}</Text>
                                    <Text style={styles.gameCategory}>{game.category}</Text>
                                    <Text style={styles.gamePlayers}>{game.players} jogadores</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Atividades Recentes */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Atividades Recentes</Text>
                        </View>

                        {atividadesRecentes.map((activity) => (
                            <View key={activity.id} style={styles.activityCard}>
                                <View style={styles.activityContent}>
                                    <Text style={styles.activityText}>
                                        <Text style={styles.userName}>{activity.user}</Text> {activity.action}
                                    </Text>
                                    <Text style={styles.activityTime}>{activity.time}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    {/* Call-to-Action para Login */}
                    <View style={styles.ctaSection}>
                        <Text style={styles.ctaTitle}>Junte-se à comunidade!</Text>
                        <Text style={styles.ctaText}>
                            Faça login para conectar-se com amigos, participar de comunidades
                            e acompanhar suas estatísticas de jogo.
                        </Text>
                        <TouchableOpacity
                            style={styles.ctaButton}
                            onPress={() => router.push('/login')}
                        >
                            <Text style={styles.ctaButtonText}>Fazer Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* Navbar Mobile fixa na parte inferior */}
                {isMobile && <Navbar />}
            </View>
        </SafeAreaView>
    );
}