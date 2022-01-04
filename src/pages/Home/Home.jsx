import React from "react";
import "./Home.scss";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Paragraph from "../../components/Paragraph/Paragraph";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import EventHeaderTitle from "../../components/EventHeaderTitle/EventHeaderTitle";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Home page</h1>
      <EventHeaderTitle
       subtitle = "Can You Hear The Shape of The Drum?"
       title = "BACH, THE UNIVERSE & EVERYTHING"
        />
      <EventHeaderDetails
        time="11.30am"
        date="Sun 21 Nov 2021"
        venue="South Bank"
        location="London"
      />
      <Paragraph text="this is some paragraph" />
      <ViewScheduleButton />
     
    </div>
  );
};

export default Home;
