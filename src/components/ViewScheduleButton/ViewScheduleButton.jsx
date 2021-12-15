import React from "react";
import "./ViewScheduleButton.scss";
import { Link } from "react-router-dom";

const ViewScheduleButton = () => {
  return (
    <Link to={"/event-schedule"}>
      <button type="button" className="schedule-button">
        View Schedule
      </button>
    </Link>
  );
};
export default ViewScheduleButton;
