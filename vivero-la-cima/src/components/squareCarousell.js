import React from 'react'
import PropTypes from 'prop-types'
import './squareCarousell.css'
import BackgroundImage from './BackgroundImage'

class squareCarousell extends React.Component {

  state = {
    currentImage: 0,
    numberOfImages: null,
    imagesWidth: 400,
  }

  componentDidMount(){
    //count the total number of images passed in through props
    let imagesCount = this.props.items.length;
    this.setState({
      numberOfImages: imagesCount
    });
  }

  nextImage(){
    const { currentImage, numberOfImages } = this.state;
    if(currentImage === numberOfImages-1){ //if we are at the last image, go to the first
        this.setState({
          currentImage: 0
        });
        return;
    }
    this.setState({
      currentImage: currentImage+1
    });
  }

  prevImage(){
    const { currentImage, numberOfImages } = this.state;
    if(currentImage === 0){ //if we are at the first image, go to the last image
        this.setState({
          currentImage: numberOfImages-1
        });
        return;
    }
    this.setState({
      currentImage: currentImage-1
    });
  }

  render () {
    const { items } = this.props;
    const { currentImage, imagesWidth } = this.state;

    return(
      <div className="sCarousell-container">
        <div className="sCarousell-arrow" id="sCarousell-arrow-1" onClick={this.prevImage.bind(this)}>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M192 127.3v257.4a20 20 0 0 1-34.1 14.1L29.2 270.1a20 20 0 0 1 0-28.2l128.7-128.7a20 20 0 0 1 34.1 14.1z"/></svg>
        </div>
        <div className="sCarousell-current">
          <div className="sCarousell-images" style={{transform: `translateX(${-currentImage*imagesWidth}px)`}} ref={this.imageStrip}>
          {items.map((item, index)=>
            <BackgroundImage className="sCarousell-image"  src={item.image} key={index}>
              <div className="sCarousell-title">
                <p className="title has-text-white is-marginless has-text-weight-normal">{item.title}</p>
                <p className="subTitle has-text-white is-marginless">{item.subTitle}</p>
              </div>
            </BackgroundImage>
          )}
          </div>
        </div>
        <div className="sCarousell-arrow" id="sCarousell-arrow-2" onClick={this.nextImage.bind(this)}>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M0 384.7V127.3a20 20 0 0 1 34.1-14.1l128.7 128.7a20 20 0 0 1 0 28.2L34.1 398.8A20 20 0 0 1 0 384.7z"/></svg>
        </div>
      </div>
    )
  }
}

squareCarousell.propTypes = {
  items: PropTypes.array.isRequired
}

export default squareCarousell;
