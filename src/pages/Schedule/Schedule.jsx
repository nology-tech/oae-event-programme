import React from "react";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./Schedule.scss";

const Schedule = () => {
  return (
    <div className="schedule">
      <ScheduleItem header="Welcome" />
      <ScheduleItem
        header="header"
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
