import React, { useState, useEffect } from "react";
import "./Settings.scss";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getEvent } from "../../assets/data/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getDarkTheme, setDarkTheme, getFontSize, setFontSize } from "../../utils/localStorageHelper";
import ErrorPage from "../ErrorPage/ErrorPage";
import SettingsItemToggle from "../../components/SettingsItemToggle/SettingsItemToggle";
import PageHeader from "../../components/PageHeader/PageHeader";

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
    <Layout eventId={eventId} theme={theme.templateTheme.toLowerCase()} themeColorPrimary={theme.primaryColor} themeColorText={theme.textColour} themeColorHighlight={theme.subtitleColor}>
      <div className="settings-content">
        <PageHeader title="Settings" className="settings-content__header" />
        <SettingsItemToggle settingsLabel="Dark Mode" onChange={handleChange} checked={isDarkMode} />

        <fieldset className="setting-font-size">
          <legend className="setting-font-size__header">Font Size</legend>
          <input className="setting-font-size__input" type="radio" onClick={() => handleClick("100%")} click={fontSize} defaultChecked={isInputChecked("100%")} name="font-size" />
          <label className="setting-font-size__label" htmlFor="small-font">
            Small
          </label>
          <input className="setting-font-size__input" type="radio" onClick={() => handleClick("125%")} click={fontSize} defaultChecked={isInputChecked("125%")} name="font-size" />
          <label className="setting-font-size__label" htmlFor="medium-font">
            Medium
          </label>
          <input className="setting-font-size__input" type="radio" onClick={() => handleClick("150%")} click={fontSize} defaultChecked={isInputChecked("150%")} name="font-size" />
          <label className="setting-font-size__label" htmlFor="large-font">
            Large
          </label>
        </fieldset>
      </div>
    </Layout>
  );
};

export default Settings;
