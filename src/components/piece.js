import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import useThemeTransitioning from '../hooks/useThemeTransitioning';

const Piece = props => {
    const { title, description, image, slug, index, visible, onImageLoad } = props;
    const [restartAnimations, setRestartAnimations] = useState(false);
    const [initialAnimComplete, setInitialAnimComplete] = useState(false);
    const pieceRef = useRef();
    const themeTransitioning = useThemeTransitioning();

    useEffect(() => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        const restartAnimations = async () => {
            await sleep(700);
            setRestartAnimations(true);
            await sleep(3000);
            setRestartAnimations(false);
        };
        if (themeTransitioning) {
            restartAnimations();
        }
    }, [themeTransitioning]);

    useEffect(() => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        const initialLoadComplete = async () => {
            await sleep(5000);
            setInitialAnimComplete(true);
        };
        if (visible) {
            initialLoadComplete();
        }
    }, [visible]);

    console.log('index', index);
    console.log('piece ref', pieceRef.current ? pieceRef.current : '');
    return (
        <Root
            ref={pieceRef}
            index={index}
            visible={visible}
            restartAnimations={restartAnimations}
            initialAnimComplete={initialAnimComplete}
        >
            <Wrapper>
                <Image
                    src={image ? image : 'https://source.unsplash.com/random/300x300'}
                    onLoad={onImageLoad}
                />
                <Link key={slug} to={slug}>
                    <Details>
                        <Headline>{title}</Headline>
                        <Description>{description}</Description>
                    </Details>
                </Link>
                <Cover />
            </Wrapper>
        </Root>
    );
};

const Cover = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: opacity;
    transition: 300ms opacity;
    background-color: ${p => p.theme.colors.background};
`;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transform: opacity;
    transition: 300ms opacity;
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    text-align: center;
    align-items: center;
    color: ${p => p.theme.colors.textSecondary};
    @media (max-width: 450px) {
        /* opacity: 1; */
        /* top: unset; */
        /* background: rgb(255, 255, 255);
        background: linear-gradient(0deg, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 100%); */
    }
`;

const Root = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    color: black;
    /* animation-delay: 7s; */
    border: ${p => (p.theme.key === 'dark' ? `3px solid ${p.theme.colors.violet}` : '')};
    opacity: ${p => (p.initialAnimComplete && !p.restartAnimations ? 1 : 0)};
    ${p =>
        p.visible && !p.initialAnimComplete
            ? `animation: fadein 1.5s ease-in ${0.8 + p.index * 0.15}s forwards;`
            : undefined};

                /* animation: ${p => (p.onRoot ? 'fadein 1.5s forwards' : undefined)}; */
    animation: ${p =>
        p.restartAnimations ? `fadein 1.5s ease-in ${0.8 + p.index * 0.15}s forwards` : undefined};
    /* animation: fadein 1.5s ease-in ${p => 0.8 + p.index * 0.15}s forwards; */
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
    /* border: 1px solid #e5e5e5; */
    /* padding: 16px; */
    /* border-radius: 24px; */
    /* box-shadow: 3px 3px 13px -6px rgba(0, 0, 0, 0.15); */
    &:hover {
        /* box-shadow: 3px 3px 13px -6px rgba(0, 0, 0, 0.35); */
        ${Details} {
            opacity: 1;
        }
        ${Cover} {
            opacity: 0.9;
        }
    }
    /* height: 300px; */
    width: 100%;
    /* width: auto;
    height: 100%;
    padding: 8px; */
    ::before {
        display: block;
        padding-top: 100%;
        content: '';
    }
`;

const Image = styled.img`
    /* position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    /* border-radius: 4px; */
    object-fit: cover;
    /* object-fit: contain; */
    height: 100%;
    width: 100%;
`;

const Headline = styled.h2`
    margin: 0;
`;

const Description = styled.span`
    margin-top: 8px;
`;

export default Piece;
