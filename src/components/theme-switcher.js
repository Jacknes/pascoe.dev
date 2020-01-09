import React from 'react';
import styled from 'styled-components';
import Icon from '../components/icons/Icon';
import Toggle from '../components/toggle';

const ThemeSwitcher = props => {
    console.log('props', props);
    return (
        <Toggle
            leftIcon="sun"
            rightIcon="moon"
            active={props.themeKey === 'dark'}
            onChange={props.onClick}
        />
    );
};

const Switcher = styled.div``;

export default ThemeSwitcher;
