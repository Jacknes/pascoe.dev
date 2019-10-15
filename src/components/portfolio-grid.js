import React from 'react';
import styled from 'styled-components';
import Piece from '../components/piece';
import { Link, graphql } from 'gatsby';

const Grid = props => {
    const { data } = props;
    console.log('props', props);
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    return (
        <Root>
            {posts.map(({ node }, index) => {
                console.log('node', node);
                const title = node.frontmatter.title || node.fields.slug;
                const image = node.frontmatter.image;
                const description = node.frontmatter.description;
                return (
                    <Piece
                        title={title}
                        description={description}
                        image={image}
                        slug={node.fields.slug}
                        index={index}
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    margin-bottom: 16px;
    @media (max-width: 967px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const Title = styled.h3``;

const Date = styled.small``;

const Description = styled.p``;

export default Grid;
