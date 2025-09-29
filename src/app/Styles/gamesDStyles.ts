import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f0f',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 40,
    },
    scrollView: {
        flex: 1,
    },
    backButton: {
        marginBottom: 24,
        paddingVertical: 8,
        alignSelf: 'flex-start',
    },
    backButtonText: {
        color: '#6200ee',
        fontSize: 16,
        fontWeight: '500',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 30,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
    },
    gameHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
    },
    headerImage: {
        width: '100%',
        height: 200,
    },
    headerIcon: {
        width: '100%',
        height: 200,
        backgroundColor: '#2a2a2a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContent: {
        padding: 20,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
        flexWrap: 'wrap',
    },
    gameIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
    },
    gameIconText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    headerInfo: {
        flex: 1,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    category: {
        fontSize: 20,
        color: '#6200ee',
        marginBottom: 12,
        fontWeight: '500',
    },
    rating: {
        fontSize: 18,
        color: '#FFD700',
    },
    saveButton: {
        backgroundColor: '#333333',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        minWidth: 140,
        alignItems: 'center',
        marginBottom: 8,
    },
    savedButton: {
        backgroundColor: '#6200ee',
    },
    saveButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    infoGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        gap: 12,
    },
    infoCard: {
        backgroundColor: '#1a1a1a',
        padding: 16,
        borderRadius: 12,
        flex: 1,
        alignItems: 'center',
    },
    infoLabel: {
        fontSize: 11,
        color: '#888888',
        marginBottom: 8,
        textAlign: 'center',
    },
    infoValue: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center',
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 16,
    },
    genresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    genreTag: {
        backgroundColor: '#6200ee',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    genreText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '500',
    },
    description: {
        fontSize: 16,
        color: '#cccccc',
        lineHeight: 24,
    },
    actions: {
        marginTop: 20,
    },
    primaryButton: {
        backgroundColor: '#6200ee',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
    },
    primaryButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});