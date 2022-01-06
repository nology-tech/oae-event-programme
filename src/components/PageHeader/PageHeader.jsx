import "./PageHeader.scss";
import React from "react";
import EventHeaderTitle from "../../components/EventHeaderTitle/EventHeaderTitle";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import HeaderImageVideoContainer from "../../components/HeaderImageVideoContainer/HeaderImageVideoContainer";

const PageHeader = (props) => {
  const { title, subtitle, time, date, venue, location, content, isVideo } = props;

  return (
    <div className="page-header">
      <EventHeaderTitle title={title} subtitle={subtitle} />
      <EventHeaderDetails time={time} date={date} venue={venue} location={location} />
      <HeaderImageVideoContainer content={content} isVideo={isVideo} />
    </div>
  );
};

export default PageHeader;
