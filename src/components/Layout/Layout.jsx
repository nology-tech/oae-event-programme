import "./Layout.scss";
import getFontType from "../../utils/stringHelper";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  const { fontType, children } = props;
  let theme = getFontType(fontType);

  return (
    <div className={`layout ${theme}`}>
      <div>
          {children}
        </div>
      <Navbar />
      </div>
  );

};

export default Layout;
