import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        maxWidth: 400, 
        width: '100%',
        alignSelf: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#6200ee',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#ffffff',
        opacity: 0.8,
    },
    form: {
        width: '100%',
        maxWidth: 320,
    },
    input: {
        backgroundColor: '#2d2d2d',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: '#ffffff',
        borderWidth: 1,
        borderColor: '#404040',
        marginBottom: 16,
        height: 48,
    },
    loginButton: {
        backgroundColor: '#6200ee',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
        height: 48,
        justifyContent: 'center',
    },
    loginButtonDisabled: {
        opacity: 0.6,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signUpLink: {
        marginTop: 20,
        alignItems: 'center',
    },
    signUpText: {
        color: '#ffffff',
        fontSize: 14,
        opacity: 0.8,
    },
    signUpHighlight: {
        color: '#6200ee',
        fontWeight: 'bold',
    },
});