import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./Schedule.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import { getEvent } from "../../assets/data/api";

const Schedule = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  useEffect(async () => {
    setEvent(await getEvent(eventId));
  }, [getEvent, eventId, setEvent]);

  if (!event) return <h1>Loading...</h1>;

  const { series, schedule } = event;

  return (
    <Layout eventId={eventId} fontType={1}>
      <PageHeader title={series} subtitle="Event Schedule" />

      <div className="schedule">
        {schedule.map((schedule, i) => (
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