import React from "react";
import "./Home.scss";
<<<<<<< HEAD
import PageHeader from "../../components/PageHeader/PageHeader";
import Paragraph from "../../components/Paragraph/Paragraph";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
=======
import Layout from "../../components/Layout/Layout";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Paragraph from "../../components/Paragraph/Paragraph";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import { useParams } from "react-router-dom";
import { getMockEventById } from "../../assets/data/data";
import HeaderImageVideoContainer from "../../components/HeaderImageVideoContainer/HeaderImageVideoContainer";
>>>>>>> 121cae44a7869ba7d1d28da4535824af62951851
import placeHolderImg from "../../assets/images/image33.png";

const Home = () => {
  const { eventId } = useParams();
  const event = getMockEventById(eventId);

  if (!event) return <h1>Invalid Event</h1>;

  const { series, subtitle, time, date, venue, location, content } = event;

  return (
<<<<<<< HEAD
    <div className="home">
      <PageHeader title="BACH, THE UNIVERSE & EVERYTHING" subtitle="Can You Hear The Shape of The Drum?" time="11.30am" date="Sun 21 Nov 2021" venue="South Bank" location="London" content={placeHolderImg} isVideo={false} />
      <Paragraph text="this is some paragraph" />
      <ViewScheduleButton />
    </div>
=======
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
>>>>>>> 121cae44a7869ba7d1d28da4535824af62951851
  );
};

export default Home;
