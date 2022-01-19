import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getEvent } from "../../assets/data/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getDarkTheme, setDarkTheme } from "../../utils/localStorageHelper";

const Setting = () => {
  const { eventId } = useParams();

  const [event, setEvent] = useState();

  useEffect(async () => {
    setEvent(await getEvent(eventId));
  }, [getEvent, eventId, setEvent]);

  if (!event) return <LoadingSpinner />;

  const { theme } = event;

  const handleChange = (e) => {
    let checked = e.target.checked;
    setDarkTheme(checked);
    window.location.reload();

    // if(e.target.checked === true){
    //   setDarkTheme(checked);
    // }
    // console.log("dank mode enabled")
    // when its checked -> true, dank mode on
    // when its unchecked -> false, dank mode off
  };

  const isDarkMode = getDarkTheme();

  return (
    <Layout
      eventId={eventId}
      fontType={theme.fontType}
      themeType={theme.primaryColour}
      textColor={theme.textColour}
      highlightColor={theme.highlightColour}
    >
      <input
        type="checkbox"
        id="dark-mode"
        onChange={handleChange}
        checked={isDarkMode}
      />
      <label htmlFor="dark-mode">Dark Mode</label>
    </Layout>
  );
};

export default Setting;
