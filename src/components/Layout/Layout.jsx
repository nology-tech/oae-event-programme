import { useEffect } from "react";
import { getDarkTheme, getFontSize } from "../../utils/localStorageHelper";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

const Layout = (props) => {
  const {
    theme = "modern",
    children,
    eventId,
    themeColorPrimary,
    themeColorText,
    themeColorHighlight,
  } = props;

  const darkTheme = getDarkTheme();

  const fontSize = getFontSize();

  useEffect(() => {
    let { style } = document.documentElement;

    // set theme colours
    themeColorPrimary &&
      style.setProperty("--theme-color-primary", themeColorPrimary);
    themeColorText && style.setProperty("--theme-color-text", themeColorText);
    themeColorHighlight &&
      style.setProperty("--theme-color-highlight", themeColorHighlight);

    // setting font size
    style.setProperty("--font-size", fontSize ?? "100%");  

    //set dark/ light mode colours
    style.setProperty("--background-color", darkTheme ? "#333333" : "#fafafc");
    style.setProperty("--text-color", darkTheme ? "#e4e5f0" : "#333333");
    style.setProperty("--fill-color", darkTheme ? "#bfbfc7" : "#333333");
    style.setProperty("--header-color", darkTheme ? "#ffffff" : "#333333");
    style.setProperty("--sub-header-color", darkTheme ? "#bfbfc7" : "#333333");
    style.setProperty("--hr-color", darkTheme ? "#bfbfc7" : "#e4e5f0");
  }, [themeColorPrimary, themeColorText, themeColorHighlight]);

  return (
    <div className={`layout ${theme}`}>
      <div>{children}</div>
      <Navbar eventId={eventId} />
    </div>
  );
};

export default Layout;
