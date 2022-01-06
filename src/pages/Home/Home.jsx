import React from "react";
import "./Home.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Paragraph from "../../components/Paragraph/Paragraph";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import placeHolderImg from "../../assets/images/image33.png";

const Home = () => {
  return (
    <div className="home">
      <PageHeader title="BACH, THE UNIVERSE & EVERYTHING" subtitle="Can You Hear The Shape of The Drum?" time="11.30am" date="Sun 21 Nov 2021" venue="South Bank" location="London" content={placeHolderImg} isVideo={false} />
      <Paragraph text="this is some paragraph" />
      <ViewScheduleButton />
    </div>
  );
};

export default Home;
