import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

export function NavbarMobile() {
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', route: '/', icon: '🏠' },
        { name: 'Perfil', route: '/profile', icon: '👤' },
        { name: 'Jogos', route: '/games', icon: '🎮' },
        { name: 'Comunidades', route: '/communities', icon: '👥' },
        { name: 'Login', route: '/login', icon: '🔐' },
    ];

    return (
        <View style={mobileStyles.container}>
            {navItems.map((item) => (
                <TouchableOpacity
                    key={item.route}
                    style={[
                        mobileStyles.navItem,
                        pathname === item.route && mobileStyles.activeItem
                    ]}
                    onPress={() => router.push(item.route as any)}
                >
                    <Text style={mobileStyles.icon}>{item.icon}</Text>
                    <Text style={mobileStyles.label}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const mobileStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6200ee',
        paddingVertical: 8,
        paddingHorizontal: 4,
        borderTopWidth: 1,
        borderTopColor: '#3700b3',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    navItem: {
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        minWidth: 60,
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
        fontSize: 10,
        fontWeight: '500',
        textAlign: 'center',
    },
});