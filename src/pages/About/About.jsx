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
<<<<<<< HEAD
    <div>
      <PageHeader title="our story" subtitle="30 Years of Breaking The Rules" content="aString" isVideo={true}/>

=======
    <Layout eventId={eventId}>
      <h1>About page</h1>
>>>>>>> 121cae44a7869ba7d1d28da4535824af62951851
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
