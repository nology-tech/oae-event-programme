import React from "react";
import "./ViewScheduleButton.scss";
import { Link } from "react-router-dom";

const ViewScheduleButton = () => {
  return (
    <Link to={"/event-schedule"} className="view-schedule-button">
      View Schedule
    </Link>
  );
};
export default ViewScheduleButton;
