import React from 'react'
import './SocialFeed.css'

class SocialFeed extends React.Component {
  render () {
    return (
      <section style={{overflow: 'hidden', width: '101vw', height: '91vh'}}>
        <iframe id="juicer-iframe" src='https://www.juicer.io/api/feeds/lacimazap/iframe' frameBorder='0' width='1000' height='1000'></iframe>
      </section>
    )
  }
}

export default SocialFeed;
