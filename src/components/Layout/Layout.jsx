import { useEffect } from "react";
import { getDarkTheme } from "../../utils/localStorageHelper";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

const Layout = (props) => {
  const {
    theme,
    children,
    eventId,
    themeColorPrimary,
    themeColorText,
    themeColorHighlight,
  } = props;

  const darkTheme = getDarkTheme();

  useEffect(() => {
    let { style } = document.documentElement;

    // set theme colours
    themeColorPrimary &&
      style.setProperty("--theme-color-primary", themeColorPrimary);
    themeColorText && style.setProperty("--theme-color-text", themeColorText);
    themeColorHighlight &&
      style.setProperty("--theme-color-highlight", themeColorHighlight);

    //set dark/ light mode colours
    style.setProperty("--background-color", darkTheme ? "#333333" : "#fafafc");
    style.setProperty("--text-color", darkTheme ? "#fafafc" : "#333333");
  }, [themeColorPrimary, themeColorText, themeColorHighlight]);

  return (
    <div className={`layout ${theme}`}>
      <div>{children}</div>
      <Navbar eventId={eventId} />
    </div>
  );
};

export default Layout;
