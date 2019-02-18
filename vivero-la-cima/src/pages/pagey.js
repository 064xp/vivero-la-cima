import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/StickyNav'
import Layout from "../components/layout"

const pagey = (props) => {
  return (
    <Layout>
      <div style={{height: '100vh', background: 'rgb(89, 24, 154)'}}>
        <Nav />
      </div>
    </Layout>
  )
}

export default pagey
