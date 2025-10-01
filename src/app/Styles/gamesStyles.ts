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

    searchContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    alignItems: 'center',
},

searchInputContainer: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
},

searchInput: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#fff',
    fontSize: 16,
},

filterButton: {
    backgroundColor: '#333333',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
},

filterButtonActive: {
    backgroundColor: '#6200ee',
    borderColor: '#8133ff',
},

filterButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
},

activeFilters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 8,
},

activeFiltersText: {
    color: '#cccccc',
    fontSize: 14,
},

clearFiltersText: {
    color: '#6200ee',
    fontSize: 14,
    fontWeight: '500',
},

resultsInfo: {
    paddingHorizontal: 20,
    marginBottom: 16,
},

resultsText: {
    color: '#cccccc',
    fontSize: 14,
},

// Modal Styles
modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-end',
},

modalContent: {
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
},

modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
},

modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
},

modalClose: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
},

filtersScroll: {
    maxHeight: 400,
},

filterSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
},

filterSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
},

filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
},

filterOption: {
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
},

filterOptionSelected: {
    backgroundColor: '#6200ee',
    borderColor: '#8133ff',
},

filterOptionText: {
    color: '#cccccc',
    fontSize: 14,
},

filterOptionTextSelected: {
    color: '#fff',
    fontWeight: '500',
},

modalFooter: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#333',
},

clearFiltersButton: {
    flex: 1,
    backgroundColor: '#333333',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
},

clearFiltersButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
},

applyFiltersButton: {
    flex: 1,
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
},

applyFiltersButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
},

noResults: {
    alignItems: 'center',
    padding: 40,
},

noResultsText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
},

noResultsSubtext: {
    color: '#cccccc',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
},
});