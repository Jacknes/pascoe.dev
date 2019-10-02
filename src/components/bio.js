/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <Root>
      {/* <ProfileImg
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
      /> */}
      <BioText>
        Hi my name is <strong>{author}</strong>. I live and work in Sydney, Australia. I love making cool things and drinking good coffee.
      </BioText>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
`;

const ProfileImg = styled(Image)`
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;
  img {
    border-radius: 50%;
  }
  margin-right: 8px;
`;

const BioText = styled.p`

`;

export default Bio
