// src, desciption as props
import React from "react";
import "./Photo.scss";

const Photo = (props) => {
  const { imageSrc, description, alt } = props;

  return (
    <div className="photo">
      <img src={imageSrc} alt={alt} className="photo__image" />
      <span className="photo__description">{description}</span>
    </div>
  );
};

export default Photo;
