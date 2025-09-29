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
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        gap: 16,
    },
    gameCard: {
        backgroundColor: '#1a1a1a',
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
        width: '100%',
        minHeight: 180,
    },
    imageContainer: {
        width: '100%',
        height: 120,
        backgroundColor: '#2a2a2a',
    },
    gameImage: {
        width: '100%',
        height: '100%',
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
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    gameIconContainer: {
        marginRight: 16,
    },
    gameInfo: {
        flex: 1,
    },
    gameName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    gameCategory: {
        fontSize: 14,
        color: '#6200ee',
        marginBottom: 8,
        fontWeight: '500',
    },
    rating: {
        fontSize: 14,
        color: '#FFD700',
    },
    gameDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#333333',
    },
    developer: {
        fontSize: 12,
        color: '#cccccc',
    },
    platforms: {
        fontSize: 12,
        color: '#888888',
    },
    saveButton: {
        backgroundColor: '#333333',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    savedButton: {
        backgroundColor: '#6200ee',
    },
    saveButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
    },


});