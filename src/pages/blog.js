import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Icon from '../components/icons/Icon';

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        const posts = data.allMarkdownRemark.edges;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="All posts" />
                <Bio />
                <BlogGrid>
                    {posts.map(({ node }) => {
                        console.log('node', node);
                        const title = node.frontmatter.title || node.fields.slug;
                        return (
                            <Article key={node.fields.slug} to={node.fields.slug}>
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
                            </Article>
                        );
                    })}
                </BlogGrid>
            </Layout>
        );
    }
}

const Article = styled(Link)`
    border: 1px solid #e5e5e5;
    cursor: pointer;
    margin: 8px;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 3px 3px 13px -6px rgba(0, 0, 0, 0.15);
    &:hover {
        box-shadow: 3px 3px 13px -6px rgba(0, 0, 0, 0.35);
    }
    & > * {
        text-decoration: none;
        color: black;
    }
`;

const Title = styled.h3``;

const Date = styled.small``;

const Description = styled.p``;

const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
`;

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        image
                    }
                }
            }
        }
    }
`;
