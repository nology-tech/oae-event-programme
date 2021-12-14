import React from "react";
import "./TitleArticle.scss";

const TitleArticle = (props) => {
  const {headerTitle, articleText} = props;

  return <div className="title-article">
    <h2 className="title-article__header">{headerTitle}</h2>
    <p className="title-article__text"> {articleText}</p>

  </div>

}

export default TitleArticle;
