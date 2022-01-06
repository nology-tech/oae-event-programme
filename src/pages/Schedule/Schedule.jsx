<<<<<<< HEAD
import React, { Fragment } from "react";
=======
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
>>>>>>> 121cae44a7869ba7d1d28da4535824af62951851
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./Schedule.scss";
import PageHeader from "../../components/PageHeader/PageHeader";

const Schedule = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 121cae44a7869ba7d1d28da4535824af62951851
  );
};

export default Schedule;
