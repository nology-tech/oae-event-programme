import React from "react";
import "./Paragraph.scss";

const Paragraph = (props) => {
  const { text, isCallOut } = props;

  return (      
        <p data-testid="paragraph" 
        className={`paragraph ${
          isCallOut ? " paragraph__callout" : ""
        }`}> 
        {text}
        </p>  
  );
};
export default Paragraph;
