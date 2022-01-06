import "./Layout.scss";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  const { children, eventId } = props;
  return (
    <div className="layout">
      <div>{children}</div>
      <Navbar eventId={eventId} />
    </div>
  );
};

export default Layout;
