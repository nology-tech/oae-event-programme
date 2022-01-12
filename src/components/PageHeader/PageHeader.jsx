import "./PageHeader.scss";
import React, { Fragment } from "react";
import EventHeaderTitle from "../../components/EventHeaderTitle/EventHeaderTitle";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import ImageVideoContainer from "../ImageVideoContainer/ImageVideoContainer";

const PageHeader = (props) => {
  const { title, subtitle, time, date, venue, location, content, altContent, isVideo } =
    props;

  let headerClass = "page-header";
  if ((time, date, venue, location, content, altContent, isVideo) == null) {
    headerClass += " page-header--only";
  }

  return (
    <div className={headerClass}>
      <EventHeaderTitle title={title} subtitle={subtitle} />
      {headerClass === "page-header" ? (
        <Fragment>
          <EventHeaderDetails
            time={time}
            date={date}
            venue={venue}
            location={location}
          />
          <ImageVideoContainer content={content} altContent={altContent} isVideo={isVideo} />
        </Fragment>
      ) : null}
    </div>
  );
};

export default PageHeader;
