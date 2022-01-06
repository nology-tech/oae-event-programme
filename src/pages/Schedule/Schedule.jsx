import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./Schedule.scss";

const Schedule = () => {
  const { eventId } = useParams();

  return (
    <Layout eventId={eventId}>
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
