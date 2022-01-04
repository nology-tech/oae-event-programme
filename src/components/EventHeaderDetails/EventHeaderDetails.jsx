import "./EventHeaderDetails.scss";

const EventHeaderDetails = (props) => {
  const { time, date, venue, location } = props;

  return (
    <div className="event-header-details">
      <p className="event-header-details__time-date">
        {time}
        {time && date && (
          <span className="event-header-details__divider">|</span>
        )}
        {date}
      </p>
      <p className="event-header-details__venue-location">
        <span className="event-header-details__venue">{venue}</span>
        {location && (
          <span className="event-header-details__comma">,</span>
        )}{" "}
        {location}
      </p>
    </div>
  );
};

export default EventHeaderDetails;
