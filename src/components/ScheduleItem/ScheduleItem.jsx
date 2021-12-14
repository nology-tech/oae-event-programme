import React, {useState} from "react";
import "./ScheduleItem.scss";
import chevronDown from "../../assets/images/chevron-down.png";
import chevronUp from "../../assets/images/chevron-up.png";

const ScheduleItem = (props) => {
    const {header, subHeader, description} = props;
    const up = chevronUp;
    const down = chevronDown;
    const chevron = {up, down};

    const [showText, setShowText] = useState(false);
    const [Img, setImg] = useState(chevron.down);   
    
  const handleClick = () => {
    setShowText(!showText);
    if (showText){
        setImg(chevron.down);
    } else {
        setImg(chevron.up);
    }
  };

    return (
        <div className="schedule-item">
            <div className="schedule-item__top">
            <span className="schedule-item__top-headers">
                <h3 className="schedule-item__top-headers__header">{header}</h3>
                <p className="schedule-item__top-headers__subheader">{subHeader}</p>
            </span>
            <span className="schedule-item__top-image-container">
                <img className="schedule-item__top-image-container__image" src={Img} alt="" onClick={handleClick}></img>
            </span>
            </div>
            { showText && <p>{description}</p> }
        </div>
    );
}

export default ScheduleItem