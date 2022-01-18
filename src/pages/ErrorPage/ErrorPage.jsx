import React from "react";
import "./ErrorPage.scss";
import sadNote from "../../assets/images/sad-note.svg";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__heading">
        Oops. Looks like this page doesnt exist. <br />
        <span className="error-page__heading--span">404</span>
      </h1>
      <img className="error-page__icon" src={sadNote} alt="sad musical note" />

      <a className="error-page__button" href="//oae.co.uk/">
        Back to OAE website
      </a>
    </div>
  );
};

export default ErrorPage;
