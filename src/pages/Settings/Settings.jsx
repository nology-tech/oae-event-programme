import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getEvent } from "../../assets/data/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getDarkTheme, setDarkTheme, getFontSize, setFontSize } from "../../utils/localStorageHelper";
import ErrorPage from "../ErrorPage/ErrorPage";
import font1 from "../../assets/images/font1.svg";
import font2 from "../../assets/images/font2.svg";
import font3 from "../../assets/images/font3.svg";

const Settings = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  useEffect(async () => {
    setEvent((await getEvent(eventId)) ?? null);
  }, [getEvent, eventId, setEvent]);

  if (event === undefined) return <LoadingSpinner />;

  if (event === null) return <ErrorPage />;

  const { theme } = event;

  const handleChange = (e) => {
    let checked = e.target.checked;
    setDarkTheme(checked);
    window.location.reload();
  };

  const isDarkMode = getDarkTheme();

  const isfontSize = getFontSize();

  const handleClick = (num) => {
    setFontSize(num);
    window.location.reload()
  };

  return (
    <Layout
      eventId={eventId}
      fontType={theme.fontType}
      themeType={theme.primaryColour}
      textColor={theme.textColour}
      highlightColor={theme.highlightColour}
      fontSize={isfontSize}
    >
      <input
        type="checkbox"
        id="dark-mode"
        onChange={handleChange}
        checked={isDarkMode}
      />
      <label htmlFor="dark-mode">Dark Mode</label>

      <input 
        type="radio"
        onClick={()=>handleClick("100%")}
        click={isfontSize}
      />
      <label htmlFor="small-font">small</label>
      <input 
        type="radio"
        onClick={()=>handleClick("125%")}
        click={isfontSize}
      />
      <label htmlFor="medium-font">medium</label>
      <input 
        type="radio"
        onClick={()=>handleClick("150%")}
        click={isfontSize}
      />
      <label htmlFor="large-font">large</label>

      <img src={font1} onClick={()=>handleClick("100%")} alt=""/>
      <img src={font2}  onClick={()=>handleClick("125%")} alt="" />
      <img src={font3}  onClick={()=>handleClick("150%")} alt="" />
    
    </Layout>
  );
};

export default Settings;
