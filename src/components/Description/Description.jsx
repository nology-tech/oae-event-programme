import React, { useState } from "react";
import "./Description.scss";

const Description = (props) => {
  const { text, altText } = props;

  const [showAltText, setShowAltText] = useState(false);

  const getButtonActive = (isAltButton) => {
    if ((showAltText && isAltButton) || (!showAltText && !isAltButton)) {
      return "description__button--active";
    }
    return "";
  };

  return (
    <div className="description">
      {altText && (
        <div className="description__container">
          <button
            className={`description__button ${getButtonActive(false)}`}
            onClick={() => setShowAltText(false)}
          >
            Original
          </button>
          <button
            className={`description__button ${getButtonActive(true)}`}
            onClick={() => setShowAltText(true)}
          >
            Alternate
          </button>
        </div>
      )}
      <p>{showAltText ? altText : text}</p>
    </div>
  );
};

export default Description;
