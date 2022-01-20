import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getEvent } from "../../assets/data/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import font1 from "../../assets/images/font1.svg";
import font2 from "../../assets/images/font2.svg";
import font3 from "../../assets/images/font3.svg";
import { getFontSize, setFontSize } from "../../utils/localStorageHelper";

const Setting = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  useEffect(async () => {
    setEvent(await getEvent(eventId));
  }, [getEvent, eventId, setEvent]);

  if (!event) return <LoadingSpinner />;
  const { theme } = event;

  const fontSize = getFontSize();


  const handleClick = (num) => {
    setFontSize(num);
  };

  console.log(fontSize);
  
  return (
    <Layout
      eventId={eventId}
      fontType={theme.fontType}
      themeType={theme.primaryColour}
      textColor={theme.textColour}
      highlightColor={theme.highlightColour}
      fontSize={fontSize}
    >
      <img src={font1} onClick={()=>handleClick("100%")} alt="" />
      <img src={font2}  onClick={()=>handleClick("125%")} alt="" />
      <img src={font3}  onClick={()=>handleClick("150%")} alt="" />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ex necessitatibus quisquam fugit minus eaque voluptatibus rerum fugiat voluptatem id, distinctio illo deleniti earum officiis laboriosam numquam iusto voluptate omnis cum! Ducimus ut non ipsam.</p>
    </Layout>
  );
};
export default Setting;
