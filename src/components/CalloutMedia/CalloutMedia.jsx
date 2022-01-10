import "./CalloutMedia.scss";
import React from 'react';
import ImageVideoContainer from "../ImageVideoContainer/ImageVideoContainer";

const CalloutMedia = (props) => {
  const {content, isVideo, children} = props;
  
  const getColor = (isVideo) =>{
    if(isVideo){
      return "color-orange";
    } else{
      return "color-black";
    }
  }
  let chosenColor = getColor(isVideo);
  console.log(chosenColor)

  return (
    <div className={`callout-media ${chosenColor}`}>
      <ImageVideoContainer content={content} isVideo={isVideo}/>
      <div>{children}</div>
    </div>
  )
}

export default CalloutMedia;
