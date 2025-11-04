import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './Styles/loginStyles';
import { Navbar } from '@/components/navbar';
import { authService } from '@/services/authService';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }

        setLoading(true);
        
        try {
            const result = await authService.login({
                email: email.toLowerCase(),
                password
            });

            if (result.status === 401) {
                Alert.alert('Erro', result.message || 'Credenciais inválidas');
                return;
            }

            if (result.status === 500) {
                Alert.alert('Erro', result.message || 'Erro interno do servidor');
                return;
            }

            if (result.token) {
                await authService.saveToken(result.token);
                Alert.alert('Sucesso', 'Login realizado com sucesso!');
                router.replace('/'); // Usa replace para evitar voltar para login
            } else {
                Alert.alert('Erro', result.message || 'Erro ao fazer login');
            }
        } catch (error) {
            console.error('Erro no login:', error);
            Alert.alert('Erro', 'Erro ao conectar com o servidor');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Navbar />
            <View style={styles.centerContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Social Gamer</Text>
                    <Text style={styles.subtitle}>Faça login na sua conta</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#999"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                    />

                    <TouchableOpacity 
                        style={[
                            styles.loginButton,
                            loading && styles.loginButtonDisabled
                        ]}
                        onPress={handleLogin}
                        disabled={loading}
                    >
                        <Text style={styles.loginButtonText}>
                            {loading ? 'Entrando...' : 'Entrar'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.signUpLink}
                        onPress={() => router.push('/signup')}
                    >
                        <Text style={styles.signUpText}>
                            Não tem conta? <Text style={styles.signUpHighlight}>Cadastre-se</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}