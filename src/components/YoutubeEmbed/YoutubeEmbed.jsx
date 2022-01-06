import "./YoutubeEmbed.scss";

const YoutubeEmbed = (props) => {
  const { embedId } = props;

  if (!embedId) {
    console.error("No embedId provided for YoutubeEmbed component");
    return null;
  }

  return (
    <iframe
      className="youtube-embed"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
};

export default YoutubeEmbed;
