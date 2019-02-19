
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/components/layout.css"
import React from "react"
class App extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}
export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
