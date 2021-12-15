import "./EventHeaderDetails.scss";

const EventHeaderDetails = (props) => {
  const { time, date, venue, location } = props;
  return (
    <div className="event-details">
      <p className="event-details__time-date">
        {time}
        <span className="event-details__divider">|</span>
        {date}
      </p>
      <p className="event-details__venue">
        {venue}
        <span className="event-details__location">, {location}</span>
      </p>
    </div>
  );
};

export default EventHeaderDetails;
