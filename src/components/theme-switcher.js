import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import Icon from '../components/icons/Icon';
import Toggle from '../components/toggle';

const ThemeSwitcher = props => {
    const [grow, setGrow] = useState(false);
    console.log('props', props);
    const isLightMode = props.theme.key === 'light';

    const handleOnClick = () => {
        props.onClick();
        setGrow(true);
    };

    return (
        <Switcher onClick={handleOnClick} grow={grow}>
            <Icon type={isLightMode ? 'moon' : 'sun'} />
        </Switcher>
    );
};

const Switcher = styled.div`
    position: ${p => (p.grow ? 'fixed' : 'relative')};
    bottom:24px;
    /* bottom: ${p => (p.grow ? '24px' : undefined)}; */
    left: 24px;
    color:  ${p => (p.theme.key === 'light' ? p.theme.colors.babyBlue : p.theme.colors.black)};
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: ${p => (p.theme.key === 'light' ? p.theme.colors.black : p.theme.colors.white)};
    /* animation: ${p => (p.grow ? 'grow 4s forwards' : undefined)}; */
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
        100% {
            height: 9999px;
            width: 9999px;
            bottom: 0;
            left: 0;
            border-radius: 0;
        }
    }
`;

export default withTheme(ThemeSwitcher);
