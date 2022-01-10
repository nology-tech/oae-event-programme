import "./PageHeader.scss";
import React, { Fragment } from "react";
import EventHeaderTitle from "../../components/EventHeaderTitle/EventHeaderTitle";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import HeaderImageVideoContainer from "../../components/HeaderImageVideoContainer/HeaderImageVideoContainer";

const PageHeader = (props) => {
  const {
    title,
    subtitle,
    time,
    date,
    venue,
    location,
    content,
    isVideo,
    themeType,
  } = props;

  let headerClass = "page-header";
  if ((time, date, venue, location, content, isVideo) == null) {
    headerClass += " page-header--only";
  }

  return (
    <div className={`${headerClass} ${themeType}`}>
      <EventHeaderTitle title={title} subtitle={subtitle} theme={themeType} />
      {headerClass === "page-header" ? (
        <Fragment>
          <EventHeaderDetails
            time={time}
            date={date}
            venue={venue}
            location={location}
            theme={themeType}
          />
          <HeaderImageVideoContainer
            content={content}
            isVideo={isVideo}
            theme={themeType}
          />
        </Fragment>
      ) : null}
    </div>
  );
};

export default PageHeader;
