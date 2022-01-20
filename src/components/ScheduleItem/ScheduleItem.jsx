import React, { useState } from "react";
import Description from "../Description/Description";
import ChevronIcon from "../NavbarIcon/ChevronIcon";
import "./ScheduleItem.scss";

const ScheduleItem = (props) => {
  const { header, subHeader, description, alternateDescription } = props;
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const chevronClassname = `schedule-item__chevron${
    showText ? " schedule-item__chevron--rotated" : ""
  }${description ? "":"schedule-item__chevron--hidden"}`;

  const scheduleItemContent = (
    <>
      <span className="schedule-item__headers">
        <h3 className="schedule-item__header">{header}</h3>
        <p className="schedule-item__subheader">{subHeader}</p>
      </span>
      <span className="schedule-item__icon-container">
        <ChevronIcon className={chevronClassname} />
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
