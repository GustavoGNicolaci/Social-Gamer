import { useState } from 'react';
import { View,Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert} from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './Styles/loginStyles';
import { Navbar } from '@/components/navbar';

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
        
        {/* Teste */}
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            Alert.alert('Sucesso', 'Login realizado com sucesso!');
            router.push('/');
        } catch (error) {
            Alert.alert('Erro', 'Email ou senha incorretos');
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
                        onPress={() => router.push('/')}
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