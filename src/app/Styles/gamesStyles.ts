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

    safeArea: {
        flex: 1,
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

    gamesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
        gap: 16,
    },

    gameCard: {
        backgroundColor: '#1a1a1a',
        padding: 16,
        borderRadius: 16,
        marginBottom: 16,
        width: (width - 32 - 16) / 2,
        minHeight: 280,
    },

    imageContainer: {
        width: '100%',
        height: 120,
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        marginBottom: 12,
        overflow: 'hidden',
    },

    gameImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },

    gameIcon: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
    },

    gameIconText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
    },

    gameInfo: {
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

    saveButton: {
        backgroundColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 'auto',
    },

    savedButton: {
        backgroundColor: '#6200ee',
    },

    saveButtonText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '500',
    },

    desktopGameCard: {
        width: (width - 32 - 32) / 3,
    },

});