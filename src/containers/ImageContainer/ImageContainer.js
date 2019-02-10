import React, { Component } from 'react';
import { plannetImages } from '../../Source/imageSource'
import ImageCard from './ImageCard'

class ImageContainer extends Component {
  render() {
    const renderImages =
      plannetImages.map((img, idx) => <ImageCard key={idx} img={img} lat={this.props.lat} long={this.props.long} />)
    return (
      <div className="image-box">
        {renderImages}
      </div>
    )
  }
}

export default ImageContainer;
