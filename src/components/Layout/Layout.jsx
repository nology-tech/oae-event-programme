import "./Layout.scss";
import { getFontType } from "../../utils/themeHelper";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  const { fontType, children, eventId } = props;
  let theme = getFontType(fontType);
  return (
    <div className={`layout ${theme}`}>
      <div>{children}</div>
      <Navbar eventId={eventId} />
    </div>
  );
};

export default Layout;
