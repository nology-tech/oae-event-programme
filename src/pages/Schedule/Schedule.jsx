import React from "react";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import { useParams } from "react-router-dom";
import "./Schedule.scss";

import { getMockEventById } from "../../assets/data/data";
const Schedule = () => {
  // get the eventId parameter
  const { eventId } = useParams();
  // get the right event based on that eventId

  const { name } = getMockEventById(eventId);

  return (
    <div className="schedule">
      <ScheduleItem header="Welcome" />
      <ScheduleItem
        header={name}
        subHeader="subheader"
        description="lorem ipsum"
      />
      <ScheduleItem
        header="header"
        subHeader="subheader"
        description="lorem ipsum"
      />
    </div>
  );
};

export default Schedule;
