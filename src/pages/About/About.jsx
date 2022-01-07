import React from "react";
import Layout from "../../components/Layout/Layout";
import Photo from "../../components/Photo/Photo";
import { useParams } from "react-router-dom";
import OrchestraQuote from "../../components/OrchestraQuote/OrchestraQuote";
import PageHeader from "../../components/PageHeader/PageHeader";
import OrchestraImg from "../../assets/images/image.png"

const About = () => {
  const { eventId } = useParams();

  return (
    <Layout eventId={eventId} fontType={1}>
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
    </Layout>
  );
};

export default About;
