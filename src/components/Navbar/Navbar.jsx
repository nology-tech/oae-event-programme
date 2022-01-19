import React from "react";
import { NavLink } from "react-router-dom";
import AboutIcon from "../NavbarIcon/AboutIcon";
import ScheduleIcon from "../NavbarIcon/ScheduleIcon";
import HomeIcon from "../NavbarIcon/HomeIcon";
import SettingsIcon from "../NavbarIcon/SettingsIcon";
import "./Navbar.scss";

const Navbar = (props) => {
  const { eventId } = props;

  const checkActive = ({ isActive }) =>
    `navbar__nav-link navbar__nav-link--${isActive ? "" : "in"}active`;

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <NavLink className={checkActive} to={`/${eventId}/event-schedule`}>
          <ScheduleIcon />
          <span className="navbar__title">SCHEDULE</span>
        </NavLink>
      </div>
      <div className="navbar__content">
        <NavLink className={checkActive} to={`/${eventId}/home`}>
          <HomeIcon />
          <span className="navbar__title">HOME</span>
        </NavLink>
      </div>
      <div className="navbar__content">
        <NavLink className={checkActive} to={`/${eventId}/our-story`}>
          <AboutIcon />
          <span className="navbar__title">ABOUT</span>
        </NavLink>
      </div>

      <div className="navbar__content">
        <NavLink className={checkActive} to={`/${eventId}/settings`}>
          <SettingsIcon />
          <span className="navbar__title">SETTINGS</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
