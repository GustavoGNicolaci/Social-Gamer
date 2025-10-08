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

    ratingSection: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1a1a1a',
        borderRadius: 12,
    },

    ratingLabel: {
        fontSize: 18,
        color: '#ffffff',
        marginBottom: 16,
        fontWeight: '500',
    },

    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },

    starButton: {
        padding: 4,
    },

    star: {
        marginHorizontal: 2,
    },

    ratingText: {
        fontSize: 16,
        color: '#FFD700',
        marginLeft: 12,
        fontWeight: '500',
    },

    changeRatingButton: {
        marginTop: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#6200ee',
    },

    changeRatingText: {
        color: '#6200ee',
        fontSize: 14,
        fontWeight: '500',
    },

    reviewCount: {
        fontSize: 14,
        color: '#888',
        marginTop: 8,
    },

    reviewForm: {
        marginTop: 16,
        width: '100%',
    },

    reviewFormLabel: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 8,
        fontWeight: '500',
    },

    commentInput: {
        backgroundColor: '#2a2a2a',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        padding: 12,
        color: '#ffffff',
        fontSize: 14,
        minHeight: 100,
        textAlignVertical: 'top',
    },

    reviewFormActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
        marginTop: 12,
    },

    cancelButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#6200ee',
    },

    cancelButtonText: {
        color: '#6200ee',
        fontSize: 14,
        fontWeight: '500',
    },

    submitButton: {
        backgroundColor: '#6200ee',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
    },

    submitButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
    },

    reviewsList: {
        gap: 16,
    },

    reviewItem: {
        backgroundColor: '#1a1a1a',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#333',
    },

    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },

    reviewUserInfo: {
        flex: 1,
    },

    reviewUserName: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '500',
        marginBottom: 4,
    },

    reviewDate: {
        fontSize: 12,
        color: '#888',
    },

    reviewComment: {
        fontSize: 14,
        color: '#cccccc',
        lineHeight: 20,
    },

    noReviews: {
        textAlign: 'center',
        color: '#888',
        fontStyle: 'italic',
        padding: 20,
    },

    // Estilos para paginação
    paginationContainer: {
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 16,
        paddingHorizontal: 20,
    },

    paginationInfo: {
        color: '#cccccc',
        fontSize: 14,
        marginBottom: 12,
        textAlign: 'center',
    },

    paginationButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    pageButton: {
        backgroundColor: '#2a2a2a',
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
    },

    pageButtonActive: {
        backgroundColor: '#6200ee',
        borderColor: '#8133ff',
    },

    pageButtonDisabled: {
        backgroundColor: '#1a1a1a',
        borderColor: '#333',
    },

    pageButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
    },

    pageButtonTextActive: {
        color: '#ffffff',
        fontWeight: 'bold',
    },

    pageButtonTextDisabled: {
        color: '#666666',
    },

    pageEllipsis: {
        color: '#888888',
        fontSize: 14,
        marginHorizontal: 8,
        width: 20,
        textAlign: 'center',
    },

    ratingActions: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 8,
    },

    removeRatingButton: {
        backgroundColor: '#6200ee',
        marginTop: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
    },

    removeRatingText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },

});