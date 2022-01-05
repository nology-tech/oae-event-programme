import React from "react";
import "./Home.scss";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Paragraph from "../../components/Paragraph/Paragraph";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import { useParams } from "react-router-dom";
import { getMockEventById } from "../../assets/data/data";

const Home = () => {
  const { eventId } = useParams();
  const { location, content } = getMockEventById(eventId);

  return (
    <div className="home">
      <h1 className="home__header">Home page</h1>
      <EventHeaderDetails
        time="11.30am"
        date="Sun 21 Nov 2021"
        venue="South Bank"
        location={location}
      />
      <Paragraph text={content[0].text} />
      <ViewScheduleButton />
    </div>
  );
};

export default Home;
