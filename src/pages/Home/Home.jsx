import React from "react";
import "./Home.scss";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Paragraph from "../../components/Paragraph/Paragraph";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Home page</h1>
      <EventHeaderDetails time="11.30am" date="Sun 21 Nov 2021" venue="South Bank" location="London" />
      <YoutubeEmbed embedId="q6EoRBvdVPQ" />
      <Paragraph text="this is some paragraph" />
      <ViewScheduleButton />
      <Navbar/>
    </div>
  );
};

export default Home;
