import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ children, className, src }) => (
    <StaticQuery query={graphql`
      query {
        hero: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        paisajismo: file(relativePath: { eq: "paisajismo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        macetaMadera: file(relativePath: { eq: "maceta-madera.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        carro: file(relativePath: { eq: "carro.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        plantas: file(relativePath: { eq: "plantas.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
    `}
     render={data => {
       const imageData = data[src].childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
            { children }
          </BackgroundImage>
       )
     }
     }
    />
)

export default BackgroundSection;
