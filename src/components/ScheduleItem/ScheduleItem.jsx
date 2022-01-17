import React, { useState, useEffect } from "react";
import "./ScheduleItem.scss";
import chevronDown from "../../assets/images/chevron-down.png";
import chevronUp from "../../assets/images/chevron-up.png";

const ScheduleItem = (props) => {
  const { header, subHeader, description, descriptionAlt } = props;
  const [showText, setShowText] = useState(false);
  const [Img, setImg] = useState(chevronDown);
  const [showOriginal, setShowOriginal] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);
  const [btnOriginalStyle, setBtnOriginalStyle] = useState("schedule-item__translate-btn--active");
  const [btnTranslateStyle, setBtnTranslateStyle] = useState("schedule-item__translate-btn");

  useEffect(() => {
    if (description === null) {
      setImg("");
    }
  }, [description]);

  const handleClick = () => {
    setShowText(!showText);
    if (showText) {
      setImg(chevronDown);
    } else {
      setImg(chevronUp);
    }
  };

  const handleBtnClick = () => {
    setShowTranslation(false);
    setShowOriginal(true);
    setBtnTranslateStyle("schedule-item__translate-btn");
    setBtnOriginalStyle("schedule-item__translate-btn--active");
  };

  const handleBtnClickAlt = () => {
    setShowTranslation(true);
    setShowOriginal(false);
    setBtnTranslateStyle("schedule-item__translate-btn--active");
    setBtnOriginalStyle("schedule-item__translate-btn");
  };

  return (
    <div className="schedule-item">
      <div className="schedule-item__top">
        <span className="schedule-item__headers">
          <h3 className="schedule-item__header">{header}</h3>
          <p className="schedule-item__subheader">{subHeader}</p>
        </span>
        <span className="schedule-item__button-container">
          <img role="button" className="schedule-item__button" src={Img} alt="" onClick={handleClick}></img>
        </span>
      </div>
      {showText && (
        <div>
          {descriptionAlt && (
            <div className="schedule-item__button-container-translate">
              <button className={btnOriginalStyle} onClick={handleBtnClick}>
                Original
              </button>
              <button className={btnTranslateStyle} onClick={handleBtnClickAlt}>
                Alternate
              </button>
            </div>
          )}
          <div className="schedule-item__content">
            {showOriginal && <p className="schedule-item__content-description">{description}</p>}
            {showTranslation && <p className="schedule-item__content-description-alt">{descriptionAlt}</p>}
          </div>
        </div>
      )}
      <hr className="schedule-item__hr"></hr>
    </div>
  );
};

export default ScheduleItem;
