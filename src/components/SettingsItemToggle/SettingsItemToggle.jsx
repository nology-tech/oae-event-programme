import React from "react";
import "./SettingsItemToggle.scss";

const SettingsItemToggle = (props) => {
  const { settingsLabel, onChange, checked } = props;

  return (
    <div className="settings-item-toggle">
      <span className="settings-item-toggle__label">{settingsLabel}</span>
      <label className="settings-item-toggle__switch">
        <input
          className="settings-item-toggle__checkbox"
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <span className="settings-item-toggle__slider"></span>
      </label>
    </div>
  );
};

export default SettingsItemToggle;
