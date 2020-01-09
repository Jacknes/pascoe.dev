import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navigation = props => {
    const { onRoot } = props;
    return (
        <Root onRoot={onRoot}>
            {/* <StyledLink to={"/"}>Stuff I'm proud of</StyledLink> */}
            <StyledLink to={'/contact'}>Contact</StyledLink>
            <StyledLink onClick={() => window.open('https://github.com/Jacknes/', '_blank')}>
                Github
            </StyledLink>
            <StyledLink
                onClick={() => window.open('https://www.linkedin.com/in/jackpascoeit/', '_blank')}
            >
                Linkedin
            </StyledLink>
            <StyledLink onClick={() => window.open('https://www.instagram.com/jacknes/', '_blank')}>
                Instagram
            </StyledLink>
        </Root>
    );
};

const Root = styled.div`
    margin-bottom: auto;
    background: ${p => p.theme.background};
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
        display: none;
        margin-left: auto;
    }
`;

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: ${p => p.theme.colors.textTertiary};
    margin-top: 8px;
`;

export default Navigation;
