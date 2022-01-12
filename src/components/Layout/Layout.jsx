import "./Layout.scss";
import { useEffect } from "react";
import getFontType from "../../utils/stringHelper";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  const { fontType, children, eventId, themeType, textColor, highlightColor } =
    props;
  let theme = getFontType(fontType);

  useEffect(() => {
    // let { style } = document.documentElement;
    // themeType && style.setProperty("--theme-color-default", themeType);
    // textColor && style.setProperty("--text-color-default", textColor);
    // highlightColor && style.setProperty("--highlight-color-default", highlightColor);
  }, [themeType, textColor, highlightColor]);
  return (
    <div className={`layout ${theme}`}>
      <div>{children}</div>
      <Navbar eventId={eventId} />
    </div>
  );
};

export default Layout;

/*
const Layout = ({
  themePrimaryColor,
  themeTextColor,
  themeHighlightColor,
  children,
}) => 
   */
