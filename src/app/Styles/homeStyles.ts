import { StyleSheet, Dimensions } from "react-native";

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
        paddingBottom: 20,
    },
    welcomeSection: {
        padding: 20,
        backgroundColor: '#1a1a1a',
        marginBottom: 20,
    },
    welcomeTitle: {
        fontSize: width < 375 ? 24 : 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
        textAlign: 'center',
    },
    welcomeSubtitle: {
        fontSize: width < 375 ? 14 : 16,
        color: '#cccccc',
        lineHeight: 22,
        textAlign: 'center',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 30,
    },
    statCard: {
        backgroundColor: '#1a1a1a',
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 4,
        minHeight: 80,
        justifyContent: 'center',
    },
    statNumber: {
        fontSize: width < 375 ? 20 : 24,
        fontWeight: 'bold',
        color: '#6200ee',
        marginBottom: 4,
    },
    statLabel: {
        fontSize: width < 375 ? 10 : 12,
        color: '#cccccc',
        textAlign: 'center',
    },
    section: {
        marginBottom: 30,
        paddingHorizontal: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: width < 375 ? 18 : 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    seeAllText: {
        color: '#6200ee',
        fontSize: width < 375 ? 12 : 14,
        fontWeight: '500',
    },
    horizontalScroll: {
        marginHorizontal: -4,
    },
    gameCard: {
        backgroundColor: '#1a1a1a',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 4,
        width: width < 375 ? 120 : 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gameIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    gameIconText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    gameName: {
        fontSize: width < 375 ? 12 : 14,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
        textAlign: 'center',
    },
    gameCategory: {
        fontSize: width < 375 ? 10 : 12,
        color: '#6200ee',
        marginBottom: 2,
    },
    gamePlayers: {
        fontSize: width < 375 ? 9 : 10,
        color: '#cccccc',
    },
    activityCard: {
        backgroundColor: '#1a1a1a',
        padding: 12,
        borderRadius: 12,
        marginBottom: 8,
    },
    activityContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    activityText: {
        fontSize: width < 375 ? 12 : 14,
        color: '#cccccc',
        flex: 1,
        flexWrap: 'wrap',
    },
    userName: {
        fontWeight: 'bold',
        color: '#6200ee',
    },
    activityTime: {
        fontSize: width < 375 ? 10 : 12,
        color: '#666666',
        marginLeft: 8,
    },
    ctaSection: {
        backgroundColor: '#1a1a1a',
        margin: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    ctaTitle: {
        fontSize: width < 375 ? 18 : 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
        textAlign: 'center',
    },
    ctaText: {
        fontSize: width < 375 ? 12 : 14,
        color: '#cccccc',
        textAlign: 'center',
        marginBottom: 16,
        lineHeight: 18,
    },
    ctaButton: {
        backgroundColor: '#6200ee',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 8,
        minWidth: 120,
    },
    ctaButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
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

// Estilo adicional para telas pequenas
export const smallScreenStyles = StyleSheet.create({
    welcomeTitle: {
        fontSize: 22,
    },
    welcomeSubtitle: {
        fontSize: 13,
    },
    statCard: {
        padding: 8,
        minHeight: 70,
    },
    gameCard: {
        width: 110,
        padding: 8,
    },
});