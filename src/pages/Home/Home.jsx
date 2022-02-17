import React, { useEffect, useState } from "react";
import "./Home.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Paragraph from "../../components/Paragraph/Paragraph";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getEvent } from "../../assets/data/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../ErrorPage/ErrorPage";

const Home = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  useEffect(async () => {
    setEvent((await getEvent(eventId)) ?? null);
  }, [getEvent, eventId, setEvent]);

  if (event === undefined) return <LoadingSpinner />;

  if (!event) return <ErrorPage />;

  const {
    name,
    series,
    time,
    date,
    venue,
    location,
    content,
    theme,
    imageSrc,
    imageAlt,
  } = event;
  return (
    <Layout
      eventId={eventId}
      theme={theme.templateTheme.toLowerCase()}
      themeColorPrimary={theme.primaryColor}
      themeColorText={theme.textColor}
      themeColorHighlight={theme.subtitleColor}
    >
      <div className="home">
        <PageHeader
          title={name}
          subtitle={series}
          time={time}
          date={date}
          venue={venue}
          location={location}
          content={imageSrc}
          altContent={imageAlt}
          isVideo={false}
        />
        <ViewScheduleButton eventId={eventId} />
        {content.map((event, i) => (
          <div className="home__content" key={"event" + i}>
            <h2 className="home__content-heading">{event.heading}</h2>
            <Paragraph className="home__content-text" text={event.text} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Home;
