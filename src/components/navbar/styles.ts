import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#6200ee",
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
        left: 0,
        right: 0,
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