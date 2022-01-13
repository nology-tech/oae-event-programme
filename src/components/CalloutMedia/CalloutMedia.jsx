import "./CalloutMedia.scss";
import React from "react";
import ImageVideoContainer from "../ImageVideoContainer/ImageVideoContainer";

const CalloutMedia = (props) => {
  const { content, isVideo, children } = props;

  return (
    <div className="callout-media">
      <ImageVideoContainer className="callout-media__image" content={content} isVideo={isVideo} />
      <div>{children}</div>
    </div>
  );
};

export default CalloutMedia;
