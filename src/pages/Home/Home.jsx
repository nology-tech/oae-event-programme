import React from "react";
import "./Home.scss";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";

const Home = () => {
  return (
    <div className="home">
      <h1>Home page</h1>
      <EventHeaderDetails time="11.30am" date="Sun 21 Nov 2021" venue="South Bank" location="London" />
    </div>
  );
};

export default Home;
