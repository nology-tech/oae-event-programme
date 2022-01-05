import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import "./HeaderImageVideoContainer.scss";

const HeaderImageVideoContainer = (props) => {
  const { content, isVideo } = props;

  // two props, content and isVideo
  // check to see if content is true - if not return null/console error
  // if true, return either yt embed or img

  if (!content) {
    console.error("No props provided to header image/video container.");
    return null;
  }

  return <div className="header-container">{isVideo ? <YoutubeEmbed embedId={content} /> : <img src={content} className="header-image" alt="Event image" />}</div>;
};

export default HeaderImageVideoContainer;
