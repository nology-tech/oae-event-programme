import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="loading__spinner">
        <div className="loading__bounce"></div>
        <div className="loading__bounce"></div>
        <div className="loading__bounce"></div>
      </div>
      <h1 className="loading__heading">Loading</h1>
    </div>
  );
};
export default LoadingSpinner;
