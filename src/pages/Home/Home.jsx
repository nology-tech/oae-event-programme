import React from "react";
import "./Home.scss";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Paragraph from "../../components/Paragraph/Paragraph";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import { useParams } from "react-router-dom";
import { getMockEventById } from "../../assets/data/data";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import EventHeaderTitle from "../../components/EventHeaderTitle/EventHeaderTitle";

const Home = () => {
  const { eventId } = useParams();
  const { series, subtitle, time, date, venue, location, content } =
    getMockEventById(eventId);

  const headingsArr = content.map((content) => content.heading);

  console.log(headingsArr);
  return (
    <div className="home">
      <h1 className="home__header">heading</h1>
      <EventHeaderTitle title={series} subtitle={subtitle} />
      <EventHeaderDetails
        time={time}
        date={date}
        venue={venue}
        location={location}
      />
      <YoutubeEmbed embedId="q6EoRBvdVPQ" />

      <Paragraph text={content[0].text} />
      <ViewScheduleButton />
    </div>
  );
};

export default Home;
