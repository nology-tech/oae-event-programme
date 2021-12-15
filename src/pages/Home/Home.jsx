import React from "react";
import "./Home.scss";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Home page</h1>
      <ViewScheduleButton />
    </div>
  );
};

export default Home;