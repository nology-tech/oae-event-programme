import React from "react";
import "./ViewScheduleButton.scss";
import { Link } from "react-router-dom";

const ViewScheduleButton = () => {
  return (
    <Link to="/schedule">
      <button className="schedule-button">View Schedule</button>
    </Link>
  );
};
export default ViewScheduleButton;
