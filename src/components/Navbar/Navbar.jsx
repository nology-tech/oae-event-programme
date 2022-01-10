import React from "react";
import { NavLink } from "react-router-dom";
import AboutIcon from "../NavbarIcon/AboutIcon";
import ScheduleIcon from "../NavbarIcon/ScheduleIcon";
import HomeIcon from "../NavbarIcon/Home";
import "./Navbar.scss";

const Navbar = (props) => {
  const { eventId } = props;

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <NavLink
          style={({ isActive }) => ({ fill: isActive ? "black" : "#CACBCD" })}
          //className="navbar__schedule-link"
          to={`/${eventId}/event-schedule`}
        >
          <ScheduleIcon />
        </NavLink>
        <span className="navbar__title">SCHEDULE</span>
      </div>
      <div className="navbar__content">
        <NavLink
          style={({ isActive }) => ({ fill: isActive ? "black" : "#CACBCD" })}
          //className="navbar__home-link"
          to={`/${eventId}/home`}
        >
          <HomeIcon />
        </NavLink>
        <span className="navbar__title">HOME</span>
      </div>

      <div className="navbar__content">
        <NavLink
          className="navbar__about-link"
          to={`/${eventId}/our-story`}
          style={({ isActive }) => ({ fill: isActive ? "black" : "#CACBCD" })}
        >
          {/* <img className="navbar__icon" src={AboutIcon} alt="about icon" /> */}
          <AboutIcon />
        </NavLink>
        <span className="navbar__title">ABOUT</span>
      </div>
    </nav>
  );
};

export default Navbar;
