import React, { useContext, useState } from 'react';

export const ThemeTransitioningContext = React.createContext(false);

export default function useThemeTransitioning() {
    return useContext(ThemeTransitioningContext);
}
