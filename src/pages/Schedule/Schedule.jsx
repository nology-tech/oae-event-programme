import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./Schedule.scss";
import PageHeader from "../../components/PageHeader/PageHeader";

const Schedule = () => {
  const { eventId } = useParams();

  return (
    <Layout eventId={eventId} fontType={1}>     
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
    </Layout>
  );
};

export default Schedule;
