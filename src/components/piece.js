import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from "gatsby";

const Piece = (props) => {
    const {title, description, image, slug, index} = props;
    console.log('index', index);
    return (
        <Root key={slug} to={slug} index={index}>
            <Image src={image ? image : 'https://source.unsplash.com/random/300x300' }/>
            <Details>
                <Headline>{title}</Headline>
                <Description>{description}</Description>
            </Details>
            <Cover />
        </Root>
    )
}

const Cover = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: opacity;
    transition: 300ms opacity;
    background-color: #fff;
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
`;

const Root = styled(Link)`
    display: flex;
    position: relative;
    flex-direction: column;
    color: black;
    /* animation-delay: 7s; */
    opacity: 0;
    animation: fadein 1.5s ease-in ${p => 0.8 + (p.index * 0.15)}s forwards;
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
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
        };
    }
    height: 300px;
    width: 300px;
    margin: 16px;
`;

const Image = styled.img`
    /* position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    /* border-radius: 4px; */
    object-fit: cover;
    height: 100%;
    width: auto;
`;

const Headline = styled.h2`
    margin: 0;
`;

const Description = styled.span`
    margin-top: 8px;
`;

export default Piece;