import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Link } from 'gatsby';
import GlitchClip from 'react-glitch-effect/core/Clip';

const Heading = ({ theme }) => {
    console.log('heading props.theme', theme);
    return (
        <StyledLink to={`/`}>
            <GlitchClip disabled={theme.key === 'light'} onHover>
                <Root>Jack Pascoe</Root>
                <Desc>Exploring Coffee & Code.</Desc>
            </GlitchClip>
        </StyledLink>
    );
};

const Root = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    ${p =>
        p.theme.key === 'dark'
            ? `
                position: relative;
                font-weight: 800;

                color: #ec00ff;
                font-style: italic;


                &:after {
                    content: 'Jack Pascoe';
                    position: absolute;
                    left: 2px;
                    top: 2px;
                    color: #0bcbff;
                }
    `
            : ''};

    @keyframes glitch {
        0% {
            transform: translate(0);
        }
        20% {
            transform: translate(-5px, 5px);
        }
        40% {
            transform: translate(-5px, -5px);
        }
        60% {
            transform: translate(5px, 5px);
        }
        80% {
            transform: translate(5px, -5px);
        }
        to {
            transform: translate(0);
        }
    }
`;

// Old hover styles :(
//     &: hover {
//                     &: before {
//         content: 'Jack Pascoe';
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100 %;
//         height: 100 %;
//         animation: glitch 0.4s infinite alternate;
//     }
// }

const Desc = styled.span`
    color: ${p => p.theme.colors.textTertiary};
    display: block;
    font-size: 18px;
    margin-top: 8px;
    font-weight: 700;
`;

const StyledLink = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    margin-bottom: 22px;
    @media (max-width: 450px) {
        margin-bottom: 0;
    }
`;

export default withTheme(Heading);
