import React from "react";
import "./Home.scss";
import Layout from "../../components/Layout/Layout";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Paragraph from "../../components/Paragraph/Paragraph";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import HeaderImageVideoContainer from "../../components/HeaderImageVideoContainer/HeaderImageVideoContainer";
import placeHolderImg from "../../assets/images/image33.png";
import EventHeaderTitle from "../../components/EventHeaderTitle/EventHeaderTitle";

const Home = () => {
  return (
    <Layout>
    <div className="home">
      <EventHeaderTitle title="BACH, THE UNIVERSE & EVERYTHING" subtitle="Can You Hear The Shape of The Drum? " />
      <EventHeaderDetails time="11.30am" date="Sun 21 Nov 2021" venue="South Bank" location="London" />
      <HeaderImageVideoContainer content={placeHolderImg} isVideo={false} />
      <Paragraph text="this is some paragraph" />
      <ViewScheduleButton />
    </div>
    </Layout>
  );
};

export default Home;
