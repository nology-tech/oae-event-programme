import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getEvent } from "../../assets/data/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {
  getDarkTheme,
  setDarkTheme,
  getFontSize,
  setFontSize,
} from "../../utils/localStorageHelper";
import ErrorPage from "../ErrorPage/ErrorPage";
// import font1 from "../../assets/images/font1.svg";
// import font2 from "../../assets/images/font2.svg";
// import font3 from "../../assets/images/font3.svg";

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

  const fontSize = getFontSize();

  const handleClick = (num) => {
    setFontSize(num);
    window.location.reload();
  };

  const isInputChecked = (inputFontSize) => {
    if (fontSize === null) {
      return inputFontSize === "100%";
    }
    return inputFontSize === fontSize;
  };

  return (
    <Layout
      eventId={eventId}
      theme={theme.templateTheme.toLowerCase()}
      themeColorPrimary={theme.primaryColor}
      themeColorText={theme.textColour}
      themeColorHighlight={theme.subtitleColor}
      fontSize={fontSize}
    >
      <input
        type="checkbox"
        id="dark-mode"
        onChange={handleChange}
        checked={isDarkMode}
      />
      <label htmlFor="dark-mode">Dark Mode</label>

      <br />
      <fieldset>
        <legend>Font Size</legend>
        <input
          type="radio"
          onClick={() => handleClick("100%")}
          click={fontSize}
          defaultChecked={isInputChecked("100%")}
          name="font-size"
        />
        <label htmlFor="small-font">small</label>
        <input
          type="radio"
          onClick={() => handleClick("125%")}
          click={fontSize}
          defaultChecked={isInputChecked("125%")}
          name="font-size"
        />
        <label htmlFor="medium-font">medium</label>
        <input
          type="radio"
          onClick={() => handleClick("150%")}
          click={fontSize}
          defaultChecked={isInputChecked("150%")}
          name="font-size"
        />
        <label htmlFor="large-font">large</label>
      </fieldset>

      {/* <img src={font1} onClick={()=>handleClick("100%")} alt=""/>
      <img src={font2}  onClick={()=>handleClick("125%")} alt="" />
      <img src={font3}  onClick={()=>handleClick("150%")} alt="" /> */}
    </Layout>
  );
};

export default Settings;
