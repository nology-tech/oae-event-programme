// src, desciption as props
import React from 'react';
import "./Photo.scss"


const Photo = (props) => {
  const{imageSrc, description} = props
  
  return (
    <div className='photo-container'>
      <img src={imageSrc} alt="placeholder" className="photo-container__image"/>
      <p className="photo-container__description">description here :){description}</p>
    </div>
  )
}

export default Photo;
