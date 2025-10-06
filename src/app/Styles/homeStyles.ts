// Styles/homeStyles.ts
import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f0f',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: Platform.OS === 'ios' ? 30 : 20,
    },
    
    // Hero Section
    heroSection: {
        backgroundColor: '#1a1a1a',
        padding: 24,
        marginBottom: 24,
    },
    heroContent: {
        alignItems: 'center',
    },
    heroTitle: {
        fontSize: width < 375 ? 26 : 32,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 12,
        textAlign: 'center',
    },
    heroSubtitle: {
        fontSize: width < 375 ? 14 : 16,
        color: '#cccccc',
        lineHeight: 22,
        textAlign: 'center',
        marginBottom: 24,
        maxWidth: 400,
    },
    heroStats: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
        padding: 16,
        borderRadius: 16,
    },
    heroStat: {
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    heroStatNumber: {
        fontSize: width < 375 ? 20 : 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    heroStatLabel: {
        fontSize: width < 375 ? 10 : 12,
        color: '#cccccc',
        textAlign: 'center',
    },
    heroStatDivider: {
        width: 1,
        height: 30,
        backgroundColor: '#333333',
    },

    // Stats Cards
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 32,
    },
    statCard: {
        flex: 1,
        padding: 20,
        borderRadius: 16,
        marginHorizontal: 6,
        minHeight: 120,
        justifyContent: 'space-between',
        backgroundColor: '#1a1a1a',
        borderWidth: 1,
        borderColor: '#333333',
    },
    statCardPrimary: {
        borderColor: '#6200ee',
    },
    statCardSecondary: {
        borderColor: '#6200ee',
    },
    statCardTertiary: {
        borderColor: '#6200ee',
    },
    statNumber: {
        fontSize: width < 375 ? 24 : 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    statLabel: {
        fontSize: width < 375 ? 12 : 14,
        color: '#cccccc',
        fontWeight: '500',
    },
    statTrend: {
        backgroundColor: '#333333',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    statTrendText: {
        fontSize: 10,
        color: '#ffffff',
        fontWeight: '500',
    },

    // Sections
    section: {
        marginBottom: 32,
        paddingHorizontal: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: width < 375 ? 20 : 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    sectionSubtitle: {
        fontSize: width < 375 ? 12 : 14,
        color: '#cccccc',
    },
    seeAllButton: {
        backgroundColor: '#333333',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    seeAllText: {
        color: '#ffffff',
        fontSize: width < 375 ? 12 : 14,
        fontWeight: '500',
    },

    // Games Section with Images
    horizontalScroll: {
        marginHorizontal: -4,
    },
    horizontalScrollContent: {
        paddingHorizontal: 4,
    },
    gameCard: {
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        marginHorizontal: 6,
        width: width < 375 ? 160 : 200,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#333333',
    },
    gameCardFirst: {
        marginLeft: 0,
    },
    gameCardLast: {
        marginRight: 0,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 120,
        backgroundColor: '#2a2a2a',
        overflow: 'hidden',
    },
    gameImage: {
        width: '100%',
        height: '100%',
    },
    gameIcon: {
        width: '100%',
        height: '100%',
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameIconText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    gameRatingBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 8,
    },
    gameRatingText: {
        color: '#FFD700',
        fontSize: 10,
        fontWeight: 'bold',
    },
    gameInfo: {
        padding: 12,
        flex: 1,
        justifyContent: 'space-between',
    },
    gameName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    gameCategory: {
        fontSize: 12,
        color: '#6200ee',
        marginBottom: 8,
        fontWeight: '500',
    },
    rating: {
        fontSize: 12,
        color: '#FFD700',
        marginBottom: 8,
    },
    gameDetails: {
        marginBottom: 12,
    },
    developer: {
        fontSize: 11,
        color: '#cccccc',
        marginBottom: 4,
    },
    platforms: {
        fontSize: 10,
        color: '#888888',
    },

    // Activities Section
    activitiesContainer: {
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#333333',
    },
    activityCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
    },
    activityCardFirst: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    activityCardLast: {
        borderBottomWidth: 0,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    activityAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    activityAvatarText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    activityContent: {
        flex: 1,
    },
    activityText: {
        fontSize: width < 375 ? 13 : 14,
        color: '#cccccc',
        marginBottom: 4,
    },
    userName: {
        fontWeight: 'bold',
        color: '#6200ee',
    },
    activityTime: {
        fontSize: width < 375 ? 10 : 11,
        color: '#888888',
    },
    activityBadge: {
        backgroundColor: '#6200ee',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    activityBadgeText: {
        fontSize: 10,
        color: '#ffffff',
        fontWeight: '500',
    },

    // CTA Section
    ctaSection: {
        backgroundColor: '#1a1a1a',
        margin: 16,
        padding: 24,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333333',
    },
    ctaContent: {
        alignItems: 'center',
    },
    ctaTitle: {
        fontSize: width < 375 ? 22 : 26,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 12,
        textAlign: 'center',
    },
    ctaText: {
        fontSize: width < 375 ? 13 : 15,
        color: '#cccccc',
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 20,
        maxWidth: 400,
    },
    ctaButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    ctaButtonPrimary: {
        backgroundColor: '#6200ee',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        minWidth: 120,
    },
    ctaButtonPrimaryText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ctaButtonSecondary: {
        backgroundColor: '#333333',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        minWidth: 120,
        borderWidth: 1,
        borderColor: '#6200ee',
    },
    ctaButtonSecondaryText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
});

export const webStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f0f',
        maxWidth: 1200,
        marginHorizontal: 'auto',
        width: '100%',
    },
});

export const smallScreenStyles = StyleSheet.create({
    heroTitle: {
        fontSize: 24,
    },
    heroSubtitle: {
        fontSize: 13,
    },
    statCard: {
        padding: 16,
        minHeight: 100,
    },
    gameCard: {
        width: 140,
    },
    imageContainer: {
        height: 100,
    },
});