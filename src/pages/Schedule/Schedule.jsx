import React from "react";
import Layout from "../../components/Layout/Layout";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./Schedule.scss";

const Schedule = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Schedule;
