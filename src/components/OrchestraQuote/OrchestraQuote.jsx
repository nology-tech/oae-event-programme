import React from "react";
import "./OrchestraQuote.scss";

const OrchestraQuote = (props) => {
  const { quote, author } = props;
  return (
    <div className="orchestra-quote">
      <q className="orchestra-quote__content">{quote}</q>
      <p className="orchestra-quote__author">-{author}</p>
    </div>
  );
};

export default OrchestraQuote;
