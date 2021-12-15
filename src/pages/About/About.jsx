import React from 'react';
import Photo from '../../Components/Photo/Photo';
import testImage from "../../assets/images/image.png";



const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <Photo imageSrc={testImage}/>
    </div>
  )
}

export default About
