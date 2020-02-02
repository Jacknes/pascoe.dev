import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Hamburger from './hamburger';
import ThemeSwitcher from './theme-switcher';

const Navigation = props => {
    const { onRoot, themeKey, onThemeClick } = props;
    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen(o => !o);
    };
    return (
        <Root onRoot={onRoot}>
            {/* <StyledLink to={"/"}>Stuff I'm proud of</StyledLink> */}
            <List display={open}>
                <StyledLink to={'/contact'}>Contact</StyledLink>
                <StyledLink onClick={() => window.open('https://github.com/Jacknes/', '_blank')}>
                    Github
                </StyledLink>
                <StyledLink
                    onClick={() =>
                        window.open('https://www.linkedin.com/in/jackpascoeit/', '_blank')
                    }
                >
                    Linkedin
                </StyledLink>
                {/* <StyledLink onClick={() => window.open('https://www.instagram.com/jacknes/', '_blank')}>
                    Instagram
                </StyledLink> */}
                <ThemeSwitcher themeKey={themeKey} onClick={onThemeClick} />
            </List>
            <Hamburger open={open} onClick={handleOnClick} />
        </Root>
    );
};

const Root = styled.div`
    margin-bottom: auto;
    background-color: ${p => p.theme.colors.background};
    opacity: ${p => (p.onRoot ? 0 : 1)};
    animation: ${p => (p.onRoot ? 'fadein 1.5s ease-in 0.15s forwards' : 'none')};
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media (max-width: 450px) {
        /* display: none; */
        margin-left: auto;
    }
`;

const List = styled.div`
    @media (max-width: 450px) {
        display: flex;
        flex: 1;
        flex-direction: column;
        background-color: ${p => p.theme.colors.background};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: ${p => (p.display ? undefined : 'none')};
        opacity: ${p => (p.display ? 1 : 0)};
        /* margin-left: auto; */
    }
`;

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: ${p => p.theme.colors.textTertiary};
    margin-top: 8px;
`;

export default Navigation;
