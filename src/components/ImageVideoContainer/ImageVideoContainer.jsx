import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import "./ImageVideoContainer.scss";

const ImageVideoContainer = (props) => {
  const { content, altContent, isVideo, imageHasBorderRadius } = props;

  if (!content) {
    console.error("No props provided to header image/video container.");
    return null;
  }

  return (
    <div className="image-video-container">
      {isVideo ? (
        <YoutubeEmbed embedId={content} />
      ) : (
        <img
          src={content}
          className={`header-image${
            imageHasBorderRadius ? " header-image--border-radius" : ""
          }`}
          alt={altContent}
        />
      )}
    </div>
  );
};

export default ImageVideoContainer;
