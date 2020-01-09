import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Loader from '../components/loader';
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
            {/* <Loader /> */}
            {!imagesLoaded && (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            )}
            <PortfolioGrid {...props} loaded={imagesLoaded} onLoad={handleOnLoad} />
        </Layout>
    );
};

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* bottom: 0; */
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex: 1; */
`;

// {
//     /* <picture>
//                     <source
//                         srcset="https://media.giphy.com/media/ES4Vcv8zWfIt2/giphy.gif"
//                         type="image/webp"
//                     />
//                     <source srcset="img/creakyOldJPEG.jpg" type="image/jpeg" />
//                     <img src="img/creakyOldJPEG.jpg" alt="Alt Text!" />
//                 </picture> */
// }

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
