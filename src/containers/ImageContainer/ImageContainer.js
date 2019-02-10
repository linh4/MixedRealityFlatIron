import React, { Component } from 'react';
import { plannetImages } from '../../Source/imageSource'
import ImageCard from './ImageCard'

class ImageContainer extends Component {

  // postData = (name) => {
  //   return fetch('http://localhost:3000/plannets', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name,
  //       lat: this.props.lat,
  //       long: this.props.long
  //     })
  //   })
  // }

  render() {
    const renderImages =
      plannetImages.map((img, idx) => <ImageCard key={idx} img={img} lat={this.props.lat} long={this.props.long} />)
    return (
      <div>
        <h1>ImageContainer Component</h1>
        {renderImages}
      </div>
    )
  }
}

export default ImageContainer;
