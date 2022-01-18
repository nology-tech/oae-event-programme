import React from "react";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__heading">
        Oops. Looks like this page doesnt exist.
      </h1>
      <h2 className="error-page__subheading">Error 404</h2>
      <a className="error-page__button" href="//oae.co.uk/">
        Back to OAE Website
      </a>
    </div>
  );
};

export default ErrorPage;
