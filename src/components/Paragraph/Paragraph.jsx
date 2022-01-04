import React from "react";
import "./ParagraphComponent.scss";
const ParagraphComponent = (props) => {
  const { text } = props;

  return <p className="paragraph-component">{text}</p>;
};
export default ParagraphComponent;
