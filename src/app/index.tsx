import React from 'react';
import { View, Text, StyleSheet, Alert, Button} from 'react-native';

export default function Index() {

    function handlePress() {
        Alert.alert('Botão pressionado!', 'Você pressionou o botão.');
        console.log('Botão pressionado!');
    }

    return (
        <View>
            <Text style={styles.title}>Bem-vindo ao Social Gamer!</Text>
            <Button title="Pressione-me" onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
});