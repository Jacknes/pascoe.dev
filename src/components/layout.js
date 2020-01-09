import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import Bio from '../components/bio';
import Heading from '../components/heading';
import Navigation from '../components/navigation';
import GlobalStyles from '../components/GlobalStyles';
import ThemeSwitcher from '../components/theme-switcher';
import themes from '../components/theme';
import useLocalStorage from '../hooks/useLocalStorage';
import { ThemeTransitioningContext } from '../hooks/useThemeTransitioning';

const THEME_TRANSITION_TIME = 0.5;
const Layout = props => {
    const [themeTransitioning, setThemeTransitioning] = useState(false);
    const [restartFadeAnimations, setRestartFadeAnimations] = useState(false);
    const { location, title, children } = props;
    const [themeKey, setThemeKey] = useLocalStorage('theme', 'light');

    useEffect(() => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        const setTheme = async () => {
            console.log('themeTransitioning');
            await sleep(600);
            setThemeTransitioning(false);
            const theme = themeKey === 'light' ? 'dark' : 'light';
            setThemeKey(theme);
            setRestartFadeAnimations(true);
            await sleep(2000);
            setRestartFadeAnimations(false);
        };

        if (themeTransitioning) {
            setTheme();
        }
    }, [themeTransitioning]);

    const handleThemeSwitchOnClick = () => {
        // const theme = themeKey === 'light' ? 'dark' : 'light';
        setThemeTransitioning(true);
        // setThemeKey(theme);
    };
    const rootPath = `${__PATH_PREFIX__}/`;
    const onRoot = location.pathname === rootPath;
    const theme = themes[themeKey];

    return (
        <ThemeTransitioningContext.Provider value={themeTransitioning}>
            <ThemeProvider theme={theme}>
                <Root>
                    <ThemeSwitchCover grow={themeTransitioning} />
                    <GlobalStyles />
                    <Sidebar onRoot={false} fadeIn={restartFadeAnimations} key="1">
                        <Heading />
                        <Navigation onRoot={false} />
                        {/* <Bio /> */}
                        <ThemeSwitcher themeKey={themeKey} onClick={handleThemeSwitchOnClick} />
                    </Sidebar>
                    <Main>{children}</Main>
                </Root>
            </ThemeProvider>
        </ThemeTransitioningContext.Provider>
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
    /* max-width: 1440px; */
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
    opacity: ${p => (p.onRoot || p.fadeIn ? 0 : 1)};
    /* animation: ${p => (p.onRoot ? 'fadein 1.5s forwards' : undefined)}; */
    animation: ${p => (p.fadeIn ? 'fadein2 1.5s forwards' : undefined)};
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes fadein2 {
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
    position: relative;
    /* overflow: scroll; */
    width: 75%;
    @media (max-width: 450px) {
        width: 100%;
        padding: 0 24px;
    }
`;

const ThemeSwitchCover = styled.div`
    visibility: ${p => (p.grow ? 'visible' : 'hidden')};
    position: fixed;
    bottom: ${p => (p.grow ? '24px' : undefined)};
    left: ${p => (p.grow ? '24px' : undefined)};
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: ${p => (p.theme.key === 'light' ? p.theme.colors.black : p.theme.colors.white)};
    animation: ${p => (p.grow ? `grow ${THEME_TRANSITION_TIME}s forwards` : undefined)};
    @keyframes grow {
        0% {
            width: 40px;
            height: 40px;
        }
        10% {
            bottom: 0;
            left: 0;
            border-radius: 0;
        }
        70% {
            /* height: 100vh; */
        }
        100% {
            height: 100vh;
            width: 100vw;
            bottom: 0;
            left: 0;
            border-radius: 0;
        }
    }
`;

export default Layout;
