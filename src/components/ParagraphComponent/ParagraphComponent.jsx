import React from "react";
import "./ParagraphComponent.scss";
const ParagraphComponent = (props) => {
  const { text } = props;

  return (
    <article className="paragraph-component">
      <p>{text}</p>
    </article>
  );
};
export default ParagraphComponent;
