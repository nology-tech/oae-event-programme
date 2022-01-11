import "./Layout.scss";
import { useEffect } from "react";
import getFontType from "../../utils/stringHelper";
import Navbar from "../Navbar/Navbar";


const Layout = (props) => {
  const { fontType, children, eventId, themeType } = props;
  let theme = getFontType(fontType);
  
    useEffect(() => {
      let { style } = document.documentElement;
      style.setProperty("--theme-color-default", themeType);
    }, [themeType]);
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