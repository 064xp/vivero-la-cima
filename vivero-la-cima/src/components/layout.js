import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import './bulma.css';

import Nav from "./StickyNav"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          <Nav />
          <main className="nav-push">{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
