import React from "react";
import Photo from "../../components/Photo/Photo";
import OrchestraQuote from "../../components/OrchestraQuote/OrchestraQuote";
import PageHeader from "../../components/PageHeader/PageHeader";
import OrchestraImg from "../../assets/images/image.png"

const About = () => {
  return (
    <div>
      <PageHeader title="our story" subtitle="30 Years of Breaking The Rules" content="aString" isVideo={true}/>

      <Photo
        imageSrc={OrchestraImg}
        alt=""
        description="-"
      />
      <OrchestraQuote
        quote="COMPLIANCE IS NOT HEALTHY. WHAT I WANT IS A DIALOGUE."
        author="Vladmir Jurowski"
      />
    </div>
  );
};

export default About;
