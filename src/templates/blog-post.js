import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Icon from '../components/icons/Icon';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const { previous, next } = this.props.pageContext;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <Article>
                    <Header>
                        <Headline>{post.frontmatter.title}</Headline>
                        <Details>
                            <PostDate>{post.frontmatter.date}</PostDate>
                            <Icons>
                                {/* {post.frontmatter.github && (
                                    <Icon
                                        size={18}
                                        type={'github'}
                                        onClick={() => {
                                            window.open(post.frontmatter.github, '_blank');
                                        }}
                                    />
                                )} */}
                                {post.frontmatter.github && (
                                    <IconLink
                                        onClick={() => {
                                            window.open(post.frontmatter.github, '_blank');
                                        }}
                                    >
                                        <Icon size={18} type={'github'} />
                                    </IconLink>
                                )}
                            </Icons>
                        </Details>
                    </Header>
                    <Post dangerouslySetInnerHTML={{ __html: post.html }} />
                    <Footer>
                        <hr />
                        <Bio />
                    </Footer>
                </Article>

                <Navigation>
                    <ul
                        style={{
                            display: `flex`,
                            flexWrap: `wrap`,
                            justifyContent: `space-between`,
                            listStyle: `none`,
                            padding: 0,
                        }}
                    >
                        <li>
                            {previous && (
                                <StyledLink to={previous.fields.slug} rel="prev">
                                    ← {previous.frontmatter.title}
                                </StyledLink>
                            )}
                        </li>
                        <li>
                            {next && (
                                <StyledLink to={next.fields.slug} rel="next">
                                    {next.frontmatter.title} →
                                </StyledLink>
                            )}
                        </li>
                    </ul>
                </Navigation>
            </Layout>
        );
    }
}

const Article = styled.article`
    padding: 0 10%;
`;

const Navigation = styled.nav`
    padding: 0 10%;
    opacity: 0;
    animation: fadein 1.5s ease-in 0.4s forwards;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
`;

const Header = styled.header`
    position: relative;
    opacity: 0;
    animation: fadein 1.5s ease-in forwards;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Icons = styled.div`
    display: inline-flex;
    flex-direction: row;
    margin-left: 8px;
    /* margin-top: 24px; */
    /* position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%); */
    /* bottom: 0; */
`;

const IconLink = styled.span`
    cursor: pointer;
    height: 18px;
`;

const Headline = styled.h1`
    font-size: 64px;
    margin: 0;
    margin-top: 8px;
`;

const PostDate = styled.span`
    display: inline-block;
    /* margin-top: 24px; */
    margin: 0;
`;

const Post = styled.section`
    /* line-height: 1.5; */
    font-size: 20px;
    letter-spacing: -0.017em;
    line-height: 1.5;
    opacity: 0;
    animation: fadein 1.5s ease-in 0.4s forwards;
    margin-top: 24px;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    img {
        width: 100%;
        height: auto;
    }
`;

const Footer = styled.footer`
    opacity: 0;
    margin-top: 32px;
    animation: fadein 1.5s ease-in 0.4s forwards;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`;

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                image
                github
            }
        }
    }
`;
