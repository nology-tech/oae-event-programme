import React, { useState, useEffect } from "react";
import "./ScheduleItem.scss";
import chevronDown from "../../assets/images/chevron-down.png";
import chevronUp from "../../assets/images/chevron-up.png";
import Description from "../Description/Description";

const ScheduleItem = (props) => {
  const { header, subHeader, description, alternateDescription } = props;
  const [showText, setShowText] = useState(false);
  const [Img, setImg] = useState(chevronDown);

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
  const scheduleItemContent = (
    <>
      <span className="schedule-item__headers">
        <h3 className="schedule-item__header">{header}</h3>
        <p className="schedule-item__subheader">{subHeader}</p>
      </span>
      <span className="schedule-item__icon-container">
        <img className="schedule-item__icon" src={Img} alt="" />
      </span>
    </>
  );

  return (
    <div className="schedule-item">
      {description ? (
        <button className="schedule-item__top-button" onClick={handleClick}>
          {scheduleItemContent}
        </button>
      ) : (
        <div className="schedule-item__top-div">{scheduleItemContent}</div>
      )}
      {showText && (
        <Description text={description} altText={alternateDescription} />
      )}
      <hr className="schedule-item__hr"></hr>
    </div>
  );
};

export default ScheduleItem;
