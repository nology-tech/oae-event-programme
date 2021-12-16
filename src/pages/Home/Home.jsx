import React from "react";
import "./Home.scss";
import ViewScheduleButton from "../../Components/ViewScheduleButton/ViewScheduleButton";

const Home = () => {
  return (
    <div className="home">
      <h1>Home page</h1>
      <ViewScheduleButton />
    </div>
  );
};

export default Home;
