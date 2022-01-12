import React from "react";
import "./Home.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Paragraph from "../../components/Paragraph/Paragraph";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getMockEventById } from "../../assets/data/data";
import placeHolderImg from "../../assets/images/image33.png";

const Home = () => {
  const { eventId } = useParams();
  const event = getMockEventById(eventId);

  if (!event) return <h1>Invalid Event</h1>;

  const { series, name, time, date, venue, location, content, theme } =
    event;

  return (
    <Layout eventId={eventId} 
      fontType={theme.fontType}
      themeType={theme.primaryColour}
      textColor={theme.textColour}
      highlightColor ={theme.highlightColour}>
      <div className="home">
        <PageHeader
          title={series}
          subtitle={name}
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
            <Paragraph className="home__content-text" text={event.text} />
          </div>
        ))}
        <ViewScheduleButton eventId = {eventId}/>
      </div>
    </Layout>
  );
};

export default Home;
