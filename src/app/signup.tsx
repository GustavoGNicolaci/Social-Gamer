import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './Styles/loginStyles';
import { Navbar } from '@/components/navbar';
import { authService } from '@/services/authService';

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        if (!email || !username || !password || !confirmPassword) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }

        if (password.length < 8) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres');
            return;
        }

        setLoading(true);

        try {
            const result = await authService.register({
                username,
                email: email.toLowerCase(),
                password,
                confirmPassword,
                bio: "",
                avatar: ""
            });

            if (result.status === 400) {
                Alert.alert('Erro', result.message || 'Dados de usuário inválidos');
                return;
            }

            if (result.status === 409) {
                Alert.alert('Erro', result.message || 'Usuário já existe com este e-mail');
                return;
            }

            if (result.status === 500) {
                Alert.alert('Erro', result.message || 'Erro interno do servidor');
                return;
            }

            Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
            router.push('/login');
        } catch (error) {
            console.error('Erro no cadastro:', error);
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
                    <Text style={styles.subtitle}>Crie sua conta</Text>
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
                        placeholder="Nome de usuário"
                        placeholderTextColor="#999"
                        value={username}
                        onChangeText={setUsername}
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

                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Senha"
                        placeholderTextColor="#999"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        autoCapitalize="none"
                    />

                    <TouchableOpacity
                        style={[
                            styles.loginButton,
                            loading && styles.loginButtonDisabled
                        ]}
                        onPress={handleSignUp}
                        disabled={loading}
                    >
                        <Text style={styles.loginButtonText}>
                            {loading ? 'Cadastrando...' : 'Cadastrar'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.signUpLink}
                        onPress={() => router.push('/login')}
                    >
                        <Text style={styles.signUpText}>
                            Já tem conta? <Text style={styles.signUpHighlight}>Faça login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}