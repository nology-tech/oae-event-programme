import React from "react";
import Layout from "../../components/Layout/Layout";
import Photo from "../../components/Photo/Photo";

const About = () => {
  return (
    <Layout>
      <h1>About page</h1>
      <Photo
        imageSrc="https://place-puppy.com/300x300"
        alt="puppy"
        description="A picture of a man's best friend"
      />
    </Layout>
  );
};

export default About;
