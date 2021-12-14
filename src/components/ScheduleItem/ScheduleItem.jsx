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
            <span className="schedule-item__headers">
                <h3 className="schedule-item__headers__header">{header}</h3>
                <h4 className="schedule-item__headers__subheader">{subHeader}</h4>
            </span>
            <span className="schedule-item__image-container">
                <img className="schedule-item__image-container__image" src={Img} alt="" onClick={handleClick}></img>
            </span>
            { showText && <p>{description}</p> }
        </div>
    );
}

export default ScheduleItem