import "./EventHeaderDetails.scss";

const EventHeaderDetails = (props) => {
  const { time, date, venue, location } = props;
  return (
    <div className="event-header-details">
      <p className="event-header-details__time-date">
        {time}
        <span className="event-header-details__divider">|</span>
        {date}
      </p>
      <p className="event-header-details__venue">
        {venue}
        <span className="event-header-details__location">, {location}</span>
      </p>
    </div>
  );
};

export default EventHeaderDetails;
