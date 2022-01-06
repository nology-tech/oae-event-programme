import "./Layout.scss";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <div>{children}</div>
      <Navbar />
    </div>
  );
};

export default Layout;
