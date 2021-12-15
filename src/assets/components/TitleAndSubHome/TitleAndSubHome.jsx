
import "./TitleAndSubHome.scss";

const TitleSubHome = (props) =>{
  const {title, subtitle}= props;
  return <div className="header-home">
    <p className="header-home__subtitle">{subtitle}</p>
    <h1 className="header-home__title">{title}</h1>
  </div>
}

export default TitleSubHome;