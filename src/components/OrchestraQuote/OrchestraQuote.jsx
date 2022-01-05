import React from "react";
import "./OrchestraQuote.scss";

const OrchestraQuote = (props) => {
  const { quote, author } = props;
  return (
    <div className="orchestraquote">
      <q className="orchestraquote__content">{quote}</q>
      <p className="orchestraquote__author">-{author}</p>
    </div>
  );
};

export default OrchestraQuote;
