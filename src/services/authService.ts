import { api } from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authService = {
    async register(userData: {
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
        bio?: string;
        avatar?: string;
    }) {
        return await api.post('/users/register', userData);
    },

    async login(loginData: { email: string; password: string }) {
        return await api.post('/users/login', loginData);
    },

    async getProfile(token: string) {
        return await api.get('/users/profile', token);
    },

    async updateProfile(updateData: any, token: string) {
        return await api.put('/users/profile', updateData, token);
    },

    async deleteProfile(token: string) {
        return await api.delete('/users/profile', token);
    },

    async saveToken(token: string) {
        await AsyncStorage.setItem('userToken', token);
    },

    async getToken() {
        return await AsyncStorage.getItem('userToken');
    },

    async removeToken() {
        await AsyncStorage.removeItem('userToken');
    },

    async isTokenValid(): Promise<boolean> {
        const token = await this.getToken();
        if (!token) return false;

        try {
            // Verifica se o token está expirado
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp * 1000 > Date.now();
        } catch {
            return false;
        }
    }
};