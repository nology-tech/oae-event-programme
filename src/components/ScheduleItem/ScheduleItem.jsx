import React, { useState, useEffect } from "react";
import "./ScheduleItem.scss";
import chevronDown from "../../assets/images/chevron-down.png";
import chevronUp from "../../assets/images/chevron-up.png";

const ScheduleItem = (props) => {
  const { header, subHeader, description } = props;
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
  const jsxContent = (
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
          {" "}
          {jsxContent}
        </button>
      ) : (
        <div className="schedule-item__top-div">{jsxContent}</div>
      )}
      {showText && (
        <div className="schedule-item__content">
          <p className="schedule-item__content-description">{description}</p>
        </div>
      )}
      <hr className="schedule-item__hr"></hr>
    </div>
  );
};

export default ScheduleItem;
