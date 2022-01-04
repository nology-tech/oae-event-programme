import "./EventHeaderTitle.scss";

const EventHeaderTitle = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="header-home">
      <span className="header-home__title">{title}</span>
      <span className="header-home__subtitle">{subtitle}</span>
    </div>
  );
};

export default EventHeaderTitle;
