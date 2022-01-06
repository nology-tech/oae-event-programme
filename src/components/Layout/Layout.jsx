import "./Layout.scss";
import getFontType from "../../utils/stringHelper";

const Layout = (props) => {
  const { fontType, children } = props;
  let theme = getFontType(fontType);

  return <div className={theme}>{children}</div>;
};

export default Layout;
