import "./CalloutMedia.scss";
import React from 'react';
import ImageVideoContainer from "../ImageVideoContainer/ImageVideoContainer";


const CalloutMedia = (props) => {
  const {content, isVideo, children} = props;

    const getBoxShape = 
    isVideo ? "square" : "box-tail"

  return (

    <div className={`callout-media ${getBoxShape}`}>
      <ImageVideoContainer content={content} isVideo={isVideo}/>
      <div>{children}</div>

    </div>
  )
}

export default CalloutMedia;
