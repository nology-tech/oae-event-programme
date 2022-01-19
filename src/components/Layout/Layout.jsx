import "./Layout.scss";
import { useEffect } from "react";
import getFontType from "../../utils/stringHelper";
import { getDarkTheme } from "../../utils/localStorageHelper";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  const { fontType, children, eventId, themeType, textColor, highlightColor } =
    props;
  let theme = getFontType(fontType);

  const darkTheme = getDarkTheme();
  //setDarkTheme();

  useEffect(() => {
    let { style } = document.documentElement;
    themeType && style.setProperty("--theme-color-primary", themeType);
    textColor && style.setProperty("--theme-color-text", textColor);
    highlightColor &&
      style.setProperty("--theme-color-highlight", highlightColor);

    style.setProperty("--background-color", darkTheme ? "#333333" : "#fafafc");
    style.setProperty("--text-color", darkTheme ? "#fafafc" : "#333333");
    style.setProperty(
      "--navbar-active-color",
      darkTheme ? "#CACBCD" : "#CACBCD"
    );
  }, [themeType, textColor, highlightColor]);

  return (
    <div className={`layout ${theme}`}>
      <div>{children}</div>
      <Navbar eventId={eventId} />
    </div>
  );
};

export default Layout;
