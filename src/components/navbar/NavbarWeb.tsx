import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';

const useAuth = () => {
  // Futuramente, colocar a autenticação real aqui
  return { isAuthenticated: false };
};

export function NavbarWeb() {
    const router = useRouter();
    const pathname = usePathname();
    const { isAuthenticated } = useAuth();

    const navItems = [
        { name: 'Jogos', route: '/games', icon: 'sports-esports' },
        { name: 'Grupos', route: '/communities', icon: 'groups' },
    ];

    const handleProfilePress = () => {
        if (isAuthenticated) {
            router.push('/'); //Futuramente colocar a rota do perfil
        } else {
            router.push('/login');
        }
    };

    return (
        <View style={webStyles.container}>
            <View style={webStyles.navContent}>
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
                            <Icon
                                name={item.icon}
                                size={28}
                                color="#ffffff"
                                style={webStyles.icon}
                            />
                            <Text style={webStyles.label}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                    
                    <TouchableOpacity
                        style={[
                            webStyles.navItem,
                            (pathname === '/profile' || pathname === '/login') && webStyles.activeItem
                        ]}
                        onPress={handleProfilePress}
                    >
                        <Icon
                            name="person"
                            size={28}
                            color="#ffffff"
                            style={webStyles.icon}
                        />
                        <Text style={webStyles.label}>
                            {isAuthenticated ? 'Perfil' : 'Login'}
                        </Text>
                    </TouchableOpacity>
                </View>
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

    navContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 1500,
        alignSelf: 'center',
    },

    titleContainer: {},
    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    navItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
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