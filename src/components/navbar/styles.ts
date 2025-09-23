// components/navbar/styles.ts
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // Estilos para Navbar Web
    webContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: "#6200ee",
        width: '100%',
    },
    text: {
        color: "#ffffff",
        fontSize: 16,
        minWidth: 40,
    },
    title: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    login: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        minWidth: 40,
        textAlign: "right",
    },
});