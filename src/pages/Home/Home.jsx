import React, { useEffect, useState } from "react";
import "./Home.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Paragraph from "../../components/Paragraph/Paragraph";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getEvent } from "../../assets/data/api";
import placeHolderImg from "../../assets/images/image33.png";

const Home = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  useEffect(async () => {
    setEvent(await getEvent(eventId));
  }, [getEvent, eventId, setEvent]);

  if (!event) return <h1>Loading...</h1>;

  const { name, series, time, date, venue, location, content, theme } =
    event;
  return (
    <Layout eventId={eventId} fontType={theme.fontType}>
      <div className="home">
        <PageHeader
          title={name}
          subtitle={series}
          time={time}
          date={date}
          venue={venue}
          location={location}
          content={placeHolderImg}
          isVideo={false}
        />
        {content.map((event, i) => (
          <div className="home__content" key={"event" + i}>
            <h2 className="home__content-heading">{event.heading}</h2>
            <Paragraph className="home__content-text" text={event.content} />
          </div>
        ))}
        <ViewScheduleButton />
      </div>
    </Layout>
  );
};

export default Home;
