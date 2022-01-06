import React, { Fragment } from "react";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./Schedule.scss";
import PageHeader from "../../components/PageHeader/PageHeader";

const Schedule = () => {
  return (    
    <Fragment>
    <PageHeader title="can you hear the shape of the drums?" subtitle="Event Schedule." />
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
    </Fragment>
  );
};

export default Schedule;
