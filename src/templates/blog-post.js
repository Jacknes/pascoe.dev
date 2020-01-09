import React from 'react';
import { Link, graphql } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import GlitchClip from 'react-glitch-effect/core/Clip';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Icon from '../components/icons/Icon';
import useTheme from '../hooks/useTheme';

const BlogPostTemplate = props => {
    const post = props.data.markdownRemark;
    const siteTitle = props.data.site.siteMetadata.title;
    const { previous, next } = props.pageContext;
    const theme = useTheme();
    console.log('theme', theme);

    return (
        <Layout location={props.location} title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <Article>
                <Header>
                    <GlitchClip>
                        <Headline value={post.frontmatter.title}>{post.frontmatter.title}</Headline>
                    </GlitchClip>
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
                            {post.frontmatter.live && (
                                <IconLink
                                    onClick={() => {
                                        window.open(post.frontmatter.live, '_blank');
                                    }}
                                >
                                    <Icon size={18} type={'openNew'} />
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
};

const Article = styled.article`
    padding: 0 10%;
    @media (max-width: 450px) {
        padding: 0;
    }
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
    /* margin-top: 24px; */
    /* position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%); */
    /* bottom: 0; */
`;

const Headline = styled.h1`
    color: ${p => p.theme.colors.title};
    font-size: 64px;
    margin: 0;
    margin-top: 8px;

    ${p =>
        p.theme.key === 'dark'
            ? `
                position: relative;
                letter-spacing: -2px;
                // font-family: 'Nunito Sans', sans-serif;
                font-weight: 800;
                font-size: 64px;
                color: #ec00ff;
                font-style: italic;
                &:hover {
                    &:before {
                        content: '${p.value}';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        animation: glitch 0.4s infinite alternate;
                    }
                }
                &:after {
                    content: '${p.value}';
                    position: absolute;
                    left: 3px;
                    top: 3px;
                    color: #0bcbff;

                }
    `
            : ''};

    @keyframes glitch {
        0% {
            transform: translate(0);
        }
        20% {
            transform: translate(-5px, 5px);
        }
        40% {
            transform: translate(-5px, -5px);
        }
        60% {
            transform: translate(5px, 5px);
        }
        80% {
            transform: translate(5px, -5px);
        }
        to {
            transform: translate(0);
        }
    }
`;

const IconLink = styled.span`
    color: ${p => p.theme.colors.textSecondary};
    cursor: pointer;
    height: 18px;
    margin-left: 8px;
`;

const PostDate = styled.span`
    color: ${p => p.theme.colors.textSecondary};
    display: inline-block;
    /* margin-top: 24px; */
    margin: 0;
`;

const Post = styled.section`
    /* line-height: 1.5; */
    color: ${p => p.theme.colors.articleText};
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
    @media (max-width: 450px) {
        font-size: 18px;
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

export default withTheme(BlogPostTemplate);

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
