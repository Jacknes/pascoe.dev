import React from 'react';
import styled, { keyframes } from 'styled-components';
import Icon from './icons/Icon';

const Toggle = ({ active, leftIcon, rightIcon, disableFadeIn, onChange }) => {
    const handleClickRight = () => {
        if (!active) {
            onChange();
        }
    };

    const handleClickLeft = () => {
        if (active) {
            onChange();
        }
    };
    return (
        <Root fadeIn={!disableFadeIn}>
            <ToggleButton active={!active} onClick={handleClickLeft}>
                <Icon type={leftIcon} />
            </ToggleButton>
            <ToggleButton active={active} onClick={handleClickRight}>
                <Icon type={rightIcon} />
            </ToggleButton>
            <ActiveColour left={!active} />
        </Root>
    );
};

const Root = styled.div`
    position: relative;
    display: flex;
    border: 1px solid ${p => p.theme.colors.borderControl};
    border-radius: 12px;
    max-width: 80px;
    height: 40px;
    width: 80px;
    align-items: center;
    justify-content: space-around;
    opacity: 0;
    animation: ${p =>
            p.fadeIn
                ? keyframes`
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                `
                : undefined}
        0.5s 0.8s;
    animation-fill-mode: forwards;
`;

const ActiveColour = styled.div`
    background-color: ${p => p.theme.colors.violet};
    position: absolute;
    top: 0;
    left: ${p => (p.left ? 0 : '40px')};
    margin: -1px;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.75, 0, 0.25, 1);
`;

const ToggleButton = styled.div`
    z-index: 1;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: ${p => p.theme.colors.textTertiary};
    animation: ${p => (p.active ? colourAnimationActive : undefined)} 0.3s 0.3s;
    animation-fill-mode: forwards;
`;

const colourAnimationActive = p => {
    return keyframes`
        from {
                color: ${p.theme.colors.textTertiary};
            }
        to {
            color: ${p.theme.colors.background};
        }
    `;
};

export default Toggle;
