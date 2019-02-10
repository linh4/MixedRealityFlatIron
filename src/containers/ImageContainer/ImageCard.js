import React from 'react';

const ImageCard = (props) => {

  const handleClick = (name) => {
    return fetch('http://localhost:3000/getplanet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        lat: props.lat,
        long: props.long
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div onClick={() => handleClick(props.img.name)}>
      <h3>{props.img.name}</h3>
      <img src={props.img.url} alt={props.img.name} />
    </div>
  )
}

export default ImageCard;
