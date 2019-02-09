import React from 'react';

const ImageCard = (props) => {
  return (
    <div>
      <h3>{props.img.name}</h3>
      <img src={props.img.url} alt={props.img.name} />
    </div>
  )
}

export default ImageCard;
