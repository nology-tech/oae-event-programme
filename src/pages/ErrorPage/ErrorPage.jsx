import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__heading">
        Oops. Looks like this page doesnt exist.
      </h1>
      <h2 className="error-page__subheading">Error 404</h2>
      <Link className="error-page__button" to={"//oae.co.uk/"}>
        Back to Website
      </Link>
    </div>
  );
};

export default ErrorPage;
