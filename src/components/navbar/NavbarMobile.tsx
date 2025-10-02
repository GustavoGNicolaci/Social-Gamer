import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const useAuth = () => {
  // Futuramente, colocar a autenticação real aqui
  return { isAuthenticated: false };
};

export function NavbarMobile() {
    const router = useRouter();
    const pathname = usePathname();
    const { isAuthenticated } = useAuth();

    const handleProfilePress = () => {
        if (isAuthenticated) {
            router.push('/'); //Futuramente colocar a rota do perfil
        } else {
            router.push('/login');
        }
    };

    const navItems = [
        { name: 'Home', route: '/', icon: 'home' },
        { name: 'Jogos', route: '/games', icon: 'sports-esports' },
        { name: 'Grupos', route: '/communities', icon: 'groups' },
    ];

    return (
        <SafeAreaView edges={['bottom']} style={mobileStyles.safeArea}>
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
                        <Icon
                            name={item.icon}
                            size={24}
                            color="#ffffff"
                            style={mobileStyles.icon}
                        />
                        <Text style={mobileStyles.label}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
                
                <TouchableOpacity
                    style={[
                        mobileStyles.navItem,
                        (pathname === '/profile' || pathname === '/login') && mobileStyles.activeItem
                    ]}
                    onPress={handleProfilePress}
                >
                    <Icon
                        name="person"
                        size={24}
                        color="#ffffff"
                        style={mobileStyles.icon}
                    />

                    <Text style={mobileStyles.label}>
                        {isAuthenticated ? 'Perfil' : 'Login'}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const mobileStyles = StyleSheet.create({

    safeArea: {
        backgroundColor: '#6200ee',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 4,
        minHeight: 60,
    },

    navItem: {
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        minWidth: 60,
        flex: 1,
        marginHorizontal: 2,
    },

    activeItem: {
        backgroundColor: '#3700b3',
    },

    icon: {
        marginBottom: 2,
    },
    
    label: {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: '500',
        textAlign: 'center',
    },
});