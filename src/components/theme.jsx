import React from 'react';
import { ThemeProvider } from 'styled-components';

const common = {
    colors: {
        white: '#FFF',
        black: '#000',
        violet: '#EC00FF',
        babyBlue: '#0BCBFF',
        almostBlack: '#222',
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em',
    },
};

const lightTheme = () => {
    const c = common.colors;

    const background = c.white;

    return {
        ...c,
        title: c.black,
        articleText: c.almostBlack,
        textDefault: c.black,
        textSecondary: c.black,
        textTertiary: c.grey400,
        textReversed: c.white,
        textButton: c.white,
        background,
        bgSecondary: c.grey100,
        bgReversed: c.grey800,
        bgInput: c.white,
        bgModal: c.blackTransparent300,
        bgScrollbarThumb: c.transparent, // not used in light mode
        bgScrollbarTrack: c.transparent, // not used in light mode
        border: c.grey200,
        borderControl: c.grey300,
        borderOverlay: c.transparent,
        valid: c.green500,
        overlayHover: c.blackTransparent100,
        overlayActive: c.blackTransparent200,
        invalid: c.red500,
        warning: c.amber500,
    };
};

const darkTheme = () => {
    const c = common.colors;

    const background = c.black;

    return {
        ...c,
        title: c.babyBlue,
        articleText: c.white,
        textDefault: c.white,
        textSecondary: c.violet,
        textTertiary: c.babyBlue,
        textReversed: c.white,
        textButton: c.white,
        background,
        bgSecondary: c.grey100,
        bgReversed: c.grey800,
        bgInput: c.white,
        bgModal: c.blackTransparent300,
        bgScrollbarThumb: c.transparent, // not used in light mode
        bgScrollbarTrack: c.transparent, // not used in light mode
        border: c.grey200,
        borderControl: c.grey300,
        borderOverlay: c.transparent,
        valid: c.green500,
        overlayHover: c.blackTransparent100,
        overlayActive: c.blackTransparent200,
        invalid: c.red500,
        warning: c.amber500,
    };
};

const getTheme = key => ({
    ...common,
    colors: key === 'light' ? lightTheme() : darkTheme(),
    key,
});

const light = getTheme('light');
const dark = getTheme('dark');

const themes = {
    light,
    dark,
};

export default themes;

// export const common = {
//     colors: {
//         black: '#000000',
//         white: '#FFFFFF',
//         brand: '#1890FF',
//         grey100: '#F5F5F5',
//         grey200: '#E5E5E5',
//         grey300: '#D6D6D6',
//         grey400: '#ABABAB',
//         grey500: '#737373',
//         grey600: '#333333',
//         grey700: '#222222',
//         grey800: '#111111',
//         green200: '#F2FCF2',
//         green300: '#CCF3CC',
//         green400: '#008000',
//         green500: '#00C200',
//         amber200: '#FFF9F2',
//         amber300: '#FFEACC',
//         amber400: '#B16800',
//         amber500: '#FF9500',
//         red500: '#FF4D4D',
//         blue: '#1890FF',
//         teal: '#0EC6DC',
//         mint: '#21DBAC',
//         purple: '#6200EE',
//         yellow: '#FFE200',
//         blueTransparent100: 'rgba(24, 144, 255, 0.10)',
//         blueTransparent400: 'rgba(24, 144, 255, 0.40)',
//         blackTransparent100: 'rgba(0, 0, 0, 0.04)',
//         blackTransparent200: 'rgba(0, 0, 0, 0.10)',
//         blackTransparent300: 'rgba(0, 0, 0, 0.33)',
//         blackTransparent400: 'rgba(0, 0, 0, 0.55)',
//         blackTransparent500: 'rgba(0, 0, 0, 0.80)',
//         whiteTransparent100: 'rgba(255, 255, 255, 0.04)',
//         whiteTransparent200: 'rgba(255, 255, 255, 0.10)',
//         whiteTransparent300: 'rgba(255, 255, 255, 0.33)',
//         whiteTransparent400: 'rgba(255, 255, 255, 0.55)',
//         whiteTransparent500: 'rgba(255, 255, 255, 0.80)',
//         transparent: 'transparent',
//     },
//     brandColors: {
//         facebook: '#3B5998',
//         twitter: '#49A1F2',
//         pinterest: '#C8222C',
//         instagram: '#AB2DB4',
//     },
// };
