import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import "./HeaderImageVideoContainer.scss";

const HeaderImageVideoContainer = (props) => {
  const { content, isVideo } = props;

  if (!content) {
    console.error("No props provided to header image/video container.");
    return null;
  }

  return (
    <div className="header-image-video-container">
      {isVideo ? (
        <YoutubeEmbed embedId={content} />
      ) : (
        <img src={content} className="header-image" alt="Event image" />
      )}
    </div>
  );
};

export default HeaderImageVideoContainer;
