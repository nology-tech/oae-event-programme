import React from "react";
import Layout from "../../components/Layout/Layout";
import Photo from "../../components/Photo/Photo";
import { useParams } from "react-router-dom";
import OrchestraQuote from "../../components/OrchestraQuote/OrchestraQuote";

const About = () => {
  const { eventId } = useParams();

  return (
    <Layout eventId={eventId} fontType={1}>
      <h1>About page</h1>
      <Photo
        imageSrc="https://place-puppy.com/300x300"
        alt="puppy"
        description="A picture of a man's best friend"
      />
      <OrchestraQuote
        quote="COMPLIANCE IS NOT HEALTHY. WHAT I WANT IS A DIALOGUE."
        author="Vladmir Jurowski"
      />
    </Layout>
  );
};

export default About;
