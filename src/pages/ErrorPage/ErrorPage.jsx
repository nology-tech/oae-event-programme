import React from "react";
import "./ErrorPage.scss";
import sadNote from "../../assets/images/sad-note.svg";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__heading">
        Oops. Looks like this page doesnt exist.
      </h1>
      <img className="error-page__icon" src={sadNote} alt="sad musical note" />
      <h2 className="error-page__subheading">ERROR 404</h2>
      <a className="error-page__button" href="//oae.co.uk/">
        Back to OAE Website
      </a>
    </div>
  );
};

export default ErrorPage;
