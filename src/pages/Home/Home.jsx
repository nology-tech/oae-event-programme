import React from "react";
import "./Home.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Paragraph from "../../components/Paragraph/Paragraph";
import ViewScheduleButton from "../../components/ViewScheduleButton/ViewScheduleButton";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getMockEventById } from "../../assets/data/data";
import placeHolderImg from "../../assets/images/image33.png";
import getThemeChange from "../../utils/themeHelper";

const Home = () => {
  const { eventId } = useParams();
  const event = getMockEventById(eventId);

  if (!event) return <h1>Invalid Event</h1>;

  const { series, subtitle, time, date, venue, location, content, theme } =
    event;

  //Changes number into string
  let themeClass = getThemeChange(theme.type);

  return (
    <Layout eventId={eventId} fontType={theme.fontType}>
      <div className="home">
        <PageHeader
          title={series}
          subtitle={subtitle}
          time={time}
          date={date}
          venue={venue}
          location={location}
          content={placeHolderImg}
          isVideo={false}
          themeType={themeClass}
          className={`themeClass`}
        />
        {content.map((event, i) => (
          <div className="home__content" key={"event" + i}>
            <h2 className="home__content-heading">{event.heading}</h2>
            <Paragraph className="home__content-text" text={event.text} />
          </div>
        ))}
        <ViewScheduleButton />
      </div>
    </Layout>
  );
};

export default Home;
