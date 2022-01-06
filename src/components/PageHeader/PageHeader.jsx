import "./PageHeader.scss";
import React, {Fragment} from "react";
import EventHeaderTitle from "../../components/EventHeaderTitle/EventHeaderTitle";
import EventHeaderDetails from "../../components/EventHeaderDetails/EventHeaderDetails";
import HeaderImageVideoContainer from "../../components/HeaderImageVideoContainer/HeaderImageVideoContainer";

const PageHeader = (props) => {
  const { title, subtitle, time, date, venue, location, content, isVideo } = props;
  
  const headerClass = ((time, date, venue, location, content, isVideo) == null) ? "page-header-only" : "page-header";
 
  return (
    <div className={headerClass}>
      <EventHeaderTitle title={title} subtitle={subtitle} /> 
      {headerClass === "page-header" ? <Fragment>   
      <EventHeaderDetails time={time} date={date} venue={venue} location={location} />
      <HeaderImageVideoContainer content={content} isVideo={isVideo} />   
      </Fragment> : null}       
    </div>
  );
};

export default PageHeader;
