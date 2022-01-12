import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./Schedule.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import { getMockEventById } from "../../assets/data/data";

const Schedule = () => {
  const { eventId } = useParams();
  const event = getMockEventById(eventId);

  if (!event) return <h1>Invalid Event</h1>;

  const { series, schedules } = event;

  return (
    <Layout eventId={eventId} fontType={1}>
      <PageHeader title="Event Schedule." subtitle={series} />
      <div className="schedule">
        <ScheduleItem header="Welcome" />
        {schedules.map((schedule, i) => (
          <ScheduleItem
            key={"schedule" + i}
            header={schedule.name}
            subHeader={schedule.title}
            description={schedule.description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Schedule;
