import React from 'react';
import { useWindowDimensions } from 'react-native';
import { NavbarWeb } from './NavbarWeb';
import { NavbarMobile } from './NavbarMobile';

export function Navbar() {
    const { width } = useWindowDimensions();

    const isMobile = width < 768;

    return isMobile ? <NavbarMobile /> : <NavbarWeb />;
}