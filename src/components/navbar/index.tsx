import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export function Navbar() {
    const router = useRouter();

    function handleNavigate() {
        router.navigate('/login');
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.text}>Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/')}>
                <Text style={styles.title}>Social Gamer</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigate}>
                <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}