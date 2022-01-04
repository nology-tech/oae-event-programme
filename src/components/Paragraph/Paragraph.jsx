import React from "react";
import "./Paragraph.scss";

const Paragraph = (props) => {
  const { text } = props;

  return (
    <p data-testid="paragraph" className="paragraph">
      {text}
    </p>
  );
};
export default Paragraph;
