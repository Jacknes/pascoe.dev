import React from 'react';
import styled from 'styled-components';

const Hamburger = ({ open, onClick }) => {
    const handleOnClick = () => {
        onClick();
    };

    return (
        <Root onClick={handleOnClick}>
            <Bar1 open={open} />
            <Bar2 open={open} />
            <Bar3 open={open} />
        </Root>
    );
};

const Root = styled.div`
    display: inline-block;
    cursor: pointer;
    z-index: 11;
`;

const Bar = styled.div`
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s ease;
`;

const Bar1 = styled(Bar)`
    transform: ${p => (p.open ? 'rotate(-45deg) translate(-8px, 6px)' : undefined)};
`;

const Bar2 = styled(Bar)`
    opacity: ${p => (p.open ? '0' : undefined)};
`;

const Bar3 = styled(Bar)`
    transform: ${p => (p.open ? 'rotate(45deg) translate(-9px, -8px)' : undefined)};
`;

export default Hamburger;
