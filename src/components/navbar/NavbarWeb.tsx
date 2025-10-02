import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

export function NavbarWeb() {
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { name: 'Perfil', route: '/profile', icon: '👤' },
        { name: 'Jogos', route: '/games', icon: '🎮' },
        { name: 'Grupos', route: '/communities', icon: '👥' },
        { name: 'Login', route: '/login', icon: '🔐' },
    ];

    return (
        <View style={webStyles.container}>
            <TouchableOpacity 
                onPress={() => router.push('/')}
                style={webStyles.titleContainer}
            >
                <Text style={webStyles.title}>Social Gamer</Text>
            </TouchableOpacity>

            <View style={webStyles.navItems}>
                {navItems.map((item) => (
                    <TouchableOpacity
                        key={item.route}
                        style={[
                            webStyles.navItem,
                            pathname === item.route && webStyles.activeItem
                        ]}
                        onPress={() => router.push(item.route as any)}
                    >
                        <Text style={webStyles.icon}>{item.icon}</Text>
                        <Text style={webStyles.label}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const webStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: '#6200ee',
        width: '100%',
    },

    titleContainer: {
        flex: 1,
    },

    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    navItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 2,
        gap: 8,
    },

    navItem: {
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        minWidth: 70,
    },

    activeItem: {
        backgroundColor: '#3700b3',
    },

    icon: {
        fontSize: 20,
        marginBottom: 4,
    },

    label: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
    },

});