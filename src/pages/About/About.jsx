import React from "react";
import Photo from "../../components/Photo/Photo";
import OrchestraQuote from "../../components/OrchestraQuote/OrchestraQuote";

const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;
