import React from "react";
import "./ViewScheduleButton.scss";
import { Link } from "react-router-dom";

const ViewScheduleButton = () => {
  return (
    <Link to={"/6bb8ffe8-6e5e-4abc-be7f-b05b749849cf/event-schedule"} className="view-schedule-button">
      View Schedule
    </Link>
  );
};
export default ViewScheduleButton;
