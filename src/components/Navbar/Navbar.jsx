import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/images/home.svg";
import AboutIcon from "../../assets/images/info.svg";
import ScheduleIcon from "../../assets/images/schedule.svg";
import "./Navbar.scss";

const Navbar = (props) => {
  const { eventId } = props;
  const [bg, changeBGColor] = React.useState(1);

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <Link
          className="navbar__schedule-link"
          onClick={() => changeBGColor(1)}
          style={{
            backgroundColor: bg === 1 ? "black" : "red",
          }}
          to={`/${eventId}/event-schedule`}
        >
          <img
            className="navbar__icon"
            src={ScheduleIcon}
            alt="schedule icon"
          />
        </Link>
        <span className="navbar__title">SCHEDULE</span>
      </div>
      <div className="navbar__content">
        <Link
          className="navbar__home-link"
          onClick={() => changeBGColor(2)}
          style={{
            backgroundColor: bg === 2 ? "black" : "yellow",
          }}
          to={`/${eventId}`}
        >
          <img className="navbar__icon" src={HomeIcon} alt="home icon" />
        </Link>
        <span className="navbar__title">HOME</span>
      </div>

      <div className="navbar__content">
        <Link
          className="navbar__about-link"
          onClick={() => changeBGColor(3)}
          style={{
            backgroundColor: bg === 3 ? "black" : "green",
          }}
          to={`/${eventId}/our-story`}
        >
          <img className="navbar__icon" src={AboutIcon} alt="about icon" />
        </Link>
        <span className="navbar__title">ABOUT</span>
      </div>
    </nav>
  );
};

export default Navbar;
