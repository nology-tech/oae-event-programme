import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Photo from "../../components/Photo/Photo";

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <Photo
        imageSrc="https://place-puppy.com/300x300" alt="puppy"
        description="A picture of a man's best friend"/>
      <Navbar/>
    </div>
  );
};

export default About;
