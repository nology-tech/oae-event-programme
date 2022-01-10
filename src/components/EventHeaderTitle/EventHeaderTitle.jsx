import "./EventHeaderTitle.scss";

const EventHeaderTitle = (props) => {
  const { title, subtitle, theme } = props;

  return (
    <div className={`header-home ${theme}`}>
      <span className="header-home__subtitle">{title}</span>
      <h1 className="header-home__title">{subtitle}</h1>
    </div>
  );
};

export default EventHeaderTitle;
