import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="loading__spinner">
        <div className="loading__bounce1"></div>
        <div className="Loading__loading__bounce2"></div>
        <div className="loading__bounce3"></div>
      </div>
      <h1 className="loading__heading">Loading</h1>
    </div>
  );
};
export default LoadingSpinner;
