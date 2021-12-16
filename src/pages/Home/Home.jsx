import React from "react";
import "./Home.scss";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import ParagraphComponent from "../../components/ParagraphComponent/ParagraphComponent";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";

import event from "../../assets/data/data.js";

// console.log(event.content[1].text);

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Home page</h1>
      <EventHeaderDetails
        time="11.30am"
        date="Sun 21 Nov 2021"
        venue="South Bank"
        location="London"
      />
      <ParagraphComponent text={event.content[1].text} />
      <ViewScheduleButton />
    </div>
  );
};

export default Home;
