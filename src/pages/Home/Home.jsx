import React from "react";
import "./Home.scss";
import Layout from "../../components/Layout/Layout";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Paragraph from "../../components/Paragraph/Paragraph";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import { useParams } from "react-router-dom";
import { getMockEventById } from "../../assets/data/data";
import HeaderImageVideoContainer from "../../components/HeaderImageVideoContainer/HeaderImageVideoContainer";
import placeHolderImg from "../../assets/images/image33.png";
import EventHeaderTitle from "../../components/EventHeaderTitle/EventHeaderTitle";

const Home = () => {
  const { eventId } = useParams();
  const event = getMockEventById(eventId);

  if (!event) return <h1>Invalid Event</h1>;

  const { series, subtitle, time, date, venue, location, content } = event;

  return (
    <Layout eventId={eventId}>
      <div className="home">
        <EventHeaderTitle
          className="home__header"
          title={series}
          subtitle={subtitle}
        />
        <EventHeaderDetails
          time={time}
          date={date}
          venue={venue}
          location={location}
        />
        <HeaderImageVideoContainer content={placeHolderImg} isVideo={false} />

        {content.map((event, i) => (
          <div className="home__content" key={"event" + i}>
            <h2 className="home__content-heading">{event.heading}</h2>
            <Paragraph className="home__content-text" text={event.text} />
          </div>
        ))}
        <ViewScheduleButton />
      </div>
    </Layout>
  );
};

export default Home;
