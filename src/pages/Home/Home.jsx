import React from "react";
import "./Home.scss";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import ParagraphComponent from "../../components/ParagraphComponent/ParagraphComponent";

const Home = () => {
  return (
    <div className="home">
      <h1>Home page</h1>

      <ParagraphComponent />
      <ViewScheduleButton />
    </div>
  );
};

export default Home;
