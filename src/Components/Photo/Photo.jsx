// src, desciption as props
import React from 'react';


const Photo = (props) => {
  const{imageSrc, description} = props
  
  return (
    <div className='image-container'>
      <img src={imageSrc} alt="placeholder"/>
      <p>description here :){description}</p>
    </div>
  )
}

export default Photo;
