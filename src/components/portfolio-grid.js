import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Piece from '../components/piece';
import { Link, graphql } from 'gatsby';

const Grid = props => {
    const { data, loaded, onLoad } = props;
    const [numberOfImagesLoaded, setNumberOfImagesLoaded] = useState(0);
    const posts = data.allMarkdownRemark.edges;

    useEffect(() => {
        const numberOfPublishedArticles = posts.filter(p => p.node.frontmatter.published).length;
        console.log('numberOfPublishedArticles', numberOfPublishedArticles);
        if (numberOfImagesLoaded === numberOfPublishedArticles) {
            onLoad();
        }
    }, [numberOfImagesLoaded]);
    console.log('props', props);
    const siteTitle = data.site.siteMetadata.title;

    const handleOnImageLoad = () => {
        setNumberOfImagesLoaded(n => n + 1);
    };

    return (
        <Root loaded={loaded}>
            {posts.map(({ node }, index) => {
                console.log('node', node);
                console.log('numberOfImagesLoaded', numberOfImagesLoaded);
                const title = node.frontmatter.title || node.fields.slug;
                const image = node.frontmatter.image;
                const published = node.frontmatter.published;
                if (!published) {
                    return;
                }
                const description = node.frontmatter.description;

                return (
                    <Piece
                        title={title}
                        description={description}
                        image={image}
                        slug={node.fields.slug}
                        index={index}
                        onImageLoad={handleOnImageLoad}
                    >
                        <header>
                            <Title>
                                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                                    {title}
                                </Link>
                            </Title>
                            <Date>{node.frontmatter.date}</Date>
                        </header>
                        <section>
                            <Description
                                dangerouslySetInnerHTML={{
                                    __html: node.frontmatter.description || node.excerpt,
                                }}
                            />
                        </section>
                    </Piece>
                );
            })}
        </Root>
    );
};

const Root = styled.div`
    visibility: ${p => (p.loaded ? 'visible' : 'hidden')};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    margin-bottom: 16px;
    @media (max-width: 967px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 450px) {
        grid-template-columns: 1fr;
        margin-top: 16px;
    }
`;

const Title = styled.h3``;

const Date = styled.small``;

const Description = styled.p``;

export default Grid;
