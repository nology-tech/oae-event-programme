import "./EventHeaderTitle.scss";

const EventHeaderTitle = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="header-home">
      <h1 className="header-home__title">{title}</h1>
      <span className="header-home__subtitle">{subtitle}</span>
    </div>
  );
};

export default EventHeaderTitle;
