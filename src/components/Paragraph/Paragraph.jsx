import React from "react";
import "./Paragraph.scss";
import { Fragment } from "react/cjs/react.development";

const Paragraph = (props) => {
  const { text, isCallOut } = props;

  return (
    <Fragment>
      {isCallOut ? (
        <p data-testid="paragraph" className="paragraph paragraph__callout">
          {text}
        </p>
      ) : (
        <p data-testid="paragraph" className="paragraph">
          {text}
        </p>
      )}
    </Fragment>
  );
};
export default Paragraph;
