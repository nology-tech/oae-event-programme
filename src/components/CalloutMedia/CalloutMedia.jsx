import "./CalloutMedia.scss";
import React from 'react';
import ImageVideoContainer from "../ImageVideoContainer/ImageVideoContainer";

const CalloutMedia = (props) => {
  const {content, isVideo, children} = props;
  
  const getColor =
    isVideo ? "color-orange" : "color-black";
  
  //let chosenColor = getColor;
  console.log(getColor)

  return (
    <div className={`callout-media ${getColor}`}>
      <ImageVideoContainer content={content} isVideo={isVideo}/>
      <div>{children}</div>
    </div>
  )
}

export default CalloutMedia;
