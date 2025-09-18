import { View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { Button } from '@/components/button';
import { router } from 'expo-router';

export default function Dashbord() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashbord</Text>
            <Button title="Voltar" onPress={() => router.back()} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
});