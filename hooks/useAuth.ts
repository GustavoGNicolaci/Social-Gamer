import { useState, useEffect } from 'react';
import { authService } from '@/services/authService';
import { Alert } from 'react-native';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const token = await authService.getToken();
            const isValid = await authService.isTokenValid();

            if (token && isValid) {
                setIsAuthenticated(true);
                const profile = await authService.getProfile(token);
                if (profile.user) {
                    setUser(profile.user);
                }
            } else {
                setIsAuthenticated(false);
                await authService.removeToken();
            }
        } catch (error) {
            console.error('Erro ao verificar autenticação:', error);
            setIsAuthenticated(false);
            await authService.removeToken();
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const result = await authService.login({ email, password });

            if (result.token) {
                await authService.saveToken(result.token);
                setIsAuthenticated(true);
                return { success: true };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            console.error('Erro no login:', error);
            return { success: false, message: 'Erro ao conectar com o servidor' };
        }
    };

    const logout = async () => {
        await authService.removeToken();
        setIsAuthenticated(false);
        setUser(null);
    };

    return {
        isAuthenticated,
        loading,
        user,
        login,
        logout,
        checkAuth
    };
};