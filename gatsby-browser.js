// custom typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={{ colors: 'red' }}>{element}</ThemeProvider>
);
