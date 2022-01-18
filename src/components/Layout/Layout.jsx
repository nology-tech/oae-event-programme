import "./Layout.scss";
import { useEffect, useState } from "react";
import getFontType from "../../utils/stringHelper";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  const { fontType, children, eventId, themeType, textColor, highlightColor } =
    props;
  let theme = getFontType(fontType);

  const [darkTheme] = useState(true);

  useEffect(() => {
    let { style } = document.documentElement;
    themeType && style.setProperty("--theme-color-primary", themeType);
    textColor && style.setProperty("--theme-color-text", textColor);
    highlightColor &&
      style.setProperty("--theme-color-highlight", highlightColor);

    style.setProperty("--background-color", darkTheme ? "#202020" : "#fafafc");
    style.setProperty("--text-color", darkTheme ? "#fafafc" : "#202020");
  }, [themeType, textColor, highlightColor]);
  return (
    <div className={`layout ${theme}`}>
      <div>{children}</div>
      <Navbar eventId={eventId} />
    </div>
  );
};

export default Layout;
