import React from "react";
import { NavLink } from "react-router-dom";
import AboutIcon from "../NavbarIcon/AboutIcon";
import ScheduleIcon from "../NavbarIcon/ScheduleIcon";
import HomeIcon from "../NavbarIcon/HomeIcon";
import "./Navbar.scss";

const Navbar = (props) => {
  const { eventId } = props;

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <NavLink
          // style={({ isActive }) => ({ fill: isActive ? "black" : "#CACBCD" })}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to={`/${eventId}/event-schedule`}
        >
          <ScheduleIcon />
          <span className="navbar__title">SCHEDULE</span>
        </NavLink>
      </div>
      <div className="navbar__content">
        <NavLink
          // style={({ isActive }) => ({ fill: isActive ? "black" : "#CACBCD" })}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to={`/${eventId}/home`}
        >
          <HomeIcon />
          <span className="navbar__title">HOME</span>
        </NavLink>
      </div>

      <div className="navbar__content">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to={`/${eventId}/our-story`}
          //   style={({ isActive }) => ({ fill: isActive ? "black" : "#CACBCD" })}
        >
          {/* <img className="navbar__icon" src={AboutIcon} alt="about icon" /> */}
          <AboutIcon />
          <span className="navbar__title">ABOUT</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
