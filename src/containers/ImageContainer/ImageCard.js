import React from 'react';
import Audio from '../../components/Audio'


class ImageCard extends React.Component {

  state  = {
    freq:null
  }

  handleClick = (name) => {
    return fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        planet:name,
        lat: this.props.lat,
        long:this.props.long
      })
    })
    .then(res => res.json())
    .then(data => this.setState({
      freq:data[name]
    }))
  }
  render() {

  return (
    <div onClick={()=> this.handleClick(this.props.img.name)}>
      <h3>{this.props.img.name}</h3>
      <img src={this.props.img.url} alt={this.props.img.name} className="img-card"/>
      <div className="btn">
      <Audio freq={this.state.freq}/>
      </div>
    </div>
  )
  }
}

export default ImageCard;
