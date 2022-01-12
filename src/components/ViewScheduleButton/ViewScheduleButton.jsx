import React from "react";
import "./ViewScheduleButton.scss";
import { Link } from "react-router-dom";

const ViewScheduleButton = (props) => {
  const { eventId } = props;
  return (
    <Link to={`/${eventId}/event-schedule`} className="view-schedule-button">
      View Schedule
    </Link>
  );
};
export default ViewScheduleButton;
