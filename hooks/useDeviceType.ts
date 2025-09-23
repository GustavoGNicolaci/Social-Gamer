import { useWindowDimensions } from 'react-native';

export function useDeviceType() {
    const { width } = useWindowDimensions();
    
    return {
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        width
    };
}