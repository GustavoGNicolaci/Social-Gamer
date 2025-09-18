import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function Index() {

    const [nome, setNome] = useState("");

    function handlePress() {
        Alert.alert("Botão pressionado!", `Olá, ${nome}`);
        console.log("Botão pressionado!", `Olá, ${nome}`);
    }

    function handleNavigate() {
        router.navigate('/dashbord');
    }


    return (
        <View>
            <Text style={styles.title}>Bem-vindo ao Social Gamer!</Text>
            <Text> Olá, {nome} </Text>
            <Input placeholder="Digite algo..." onChangeText={setNome} />
            <Button title="Pressione-me" onPress={handlePress}/>
            <Button title="Ir para Dashbord" onPress={handleNavigate}/>
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