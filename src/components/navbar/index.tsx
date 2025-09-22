import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export function Navbar() {
    const router = useRouter();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.text}>Menu</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Social Gamer</Text>

            <TouchableOpacity onPress={() => router.push('/')}>
                <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}