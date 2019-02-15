import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

class Image extends React.Component {
  render () {

    const { src } = this.props;
    console.log(src);
    return(
      <StaticQuery
        query={graphql`
          query {
            macetaMadera: file(relativePath: { eq: "maceta-madera.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

          }
        `}
        render={data => <Img className={this.props.className} fluid={data[src].childImageSharp.fluid} />}
      />
    );
  }
}

export default Image;
