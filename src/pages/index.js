import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PortfolioGrid from '../components/portfolio-grid';

const HomeIndex = props => {
    const { data } = props;
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const siteTitle = data.site.siteMetadata.title;

    const handleOnLoad = () => {
        setImagesLoaded(true);
    };

    return (
        <Layout location={'this.props.location'} title={siteTitle}>
            <SEO title="Home" />
            {/* <Bio /> */}
            {!imagesLoaded && (
                <picture>
                    <source
                        srcset="https://media.giphy.com/media/ES4Vcv8zWfIt2/giphy.gif"
                        type="image/webp"
                    />
                    <source srcset="img/creakyOldJPEG.jpg" type="image/jpeg" />
                    <img src="img/creakyOldJPEG.jpg" alt="Alt Text!" />
                </picture>
            )}
            <PortfolioGrid {...props} loaded={imagesLoaded} onLoad={handleOnLoad} />
        </Layout>
    );
};

export default HomeIndex;

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
                        published
                    }
                }
            }
        }
    }
`;
