import React from "react";
import "./LoadingSpinner.scss";
const LoadingSpinner = () => {
  return (
    <div className="loading" data-testid="loading">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <h1 className="loading__heading">Loading</h1>
    </div>
  );
};
export default LoadingSpinner;
