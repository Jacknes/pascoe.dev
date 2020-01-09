import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import Bio from '../components/bio';
import Heading from '../components/heading';
import Navigation from '../components/navigation';
import GlobalStyles from '../components/GlobalStyles';
import ThemeSwitcher from '../components/theme-switcher';
import themes from '../components/theme';
import useLocalStorage from '../hooks/useLocalStorage';

const Layout = props => {
    const { location, title, children } = props;
    const [themeKey, setThemeKey] = useLocalStorage('theme', 'light');
    const handleThemeSwitchOnClick = () => {
        const theme = themeKey === 'light' ? 'dark' : 'light';
        setThemeKey(theme);
    };
    const rootPath = `${__PATH_PREFIX__}/`;
    // const onRoot = location.pathname === rootPath;
    const theme = themes[themeKey];

    return (
        <ThemeProvider theme={theme}>
            <Root>
                <GlobalStyles />
                <Sidebar onRoot={false} key="1">
                    <Heading />
                    <Navigation onRoot={false} />
                    {/* <Bio /> */}
                    <ThemeSwitcher themeKey={themeKey} onClick={handleThemeSwitchOnClick} />
                </Sidebar>
                <Main>{children}</Main>
            </Root>
        </ThemeProvider>
    );
};

const Root = styled.div`
    background-color: ${p => p.theme.colors.background};
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 24px;
    overflow: scroll;
    height: 100vh;
    width: 100vw;
    @media (max-width: 450px) {
        flex-direction: column;
        width: 100%;
        padding: 0;
    }
`;

const Sidebar = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 25%;
    padding-top: 16px;
    margin-right: 16px;

    animation: ${p => (p.onRoot ? 'fadein 1.5s' : 'none')};
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (max-width: 450px) {
        flex-direction: row;
        width: 100%;
        position: relative;
        /* border-bottom: 1px solid #e5e5e5; */
        padding-top: 0;
        margin-right: 0;
        padding: 16px 24px;
    }
`;

const StyledLink = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
    width: 75%;
    @media (max-width: 450px) {
        width: 100%;
        padding: 0 24px;
    }
`;

export default Layout;
