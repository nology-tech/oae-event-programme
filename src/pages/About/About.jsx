import React from "react";
import Layout from "../../components/Layout/Layout";
import Photo from "../../components/Photo/Photo";
import { useParams } from "react-router-dom";
import OrchestraQuote from "../../components/OrchestraQuote/OrchestraQuote";
import PageHeader from "../../components/PageHeader/PageHeader";
import OrchestraImg from "../../assets/images/imageCropped.png";
import CalloutMedia from "../../components/CalloutMedia/CalloutMedia";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./About.scss";

const About = () => {
  const { eventId } = useParams();

  return (
    <Layout eventId={eventId} fontType={1}>
      <PageHeader
        title="30 Years of Breaking The Rules"
        subtitle="our story"
        content="rOjHhS5MtvA"
        isVideo={true}
      />

      <div className="about__content">
        <h2 className="about__content-heading">
          Ripping Up the Rulebook & Starting From Scratch
        </h2>
        <Paragraph text="More than three decades ago, a group of musicians took a good look at that curious institution we call the orchestra, and decided to start again from scratch. They began by throwing out the rulebook. Put a single conductor in charge? No way. Specialise in repertoire of a particular era? Too restricting. Perfect a work and then move on? Too lazy. The Orchestra of the Age of Enlightenment was born. Questioning. Challenging. Trailblazing. On this page we look at our history, values and approach to playing music." />
      </div>

      <Photo
        imageSrc={OrchestraImg}
        alt="Players of the Orchestra"
        description="The earliest known photo of the orchestra"
      />

      <div className="about__content">
        <h2 className="about__content-heading">Our Instruments</h2>
        <Paragraph text="The first thing to know is that we play music on instruments (or replicas) from the time the music was written." />

        <Paragraph text="When we play Bach, we play on instruments and use techniques that would have been familiar to Bach himself in the early 18th century." />

        <Paragraph text="Then when we play Brahms, we change our instruments to those from Brahms' time in the mid-19th century. This gets you closer to the experience you would have had at the time the music was written." />

        <Paragraph text="There are some quite radical differences between historic instruments and modern ones. For example, our strings are made of sheep gut rather than metal. And our wind instruments often don't have valves as their modern counterparts do." />

        <Paragraph text="Why do we do this? It's not just about history. As double bass Cecelia Bruggemeyer explains in the video below, it's also about making old music new." />
      </div>
      {/* What are period instruments - video component */}
      <CalloutMedia content="rOjHhS5MtvA" isVideo={true}>
        <OrchestraQuote
          quote="WE'RE NOT TRYING TO RECREATE THE PAST. WE'RE TRYING TO CREATE SOMETHING THAT'S EXCITING NOW, USING HISTORIC INFORMATION."
          author="Cecelia Bruggemeyer, double bass"
        />
      </CalloutMedia>

      <div className="about__content">
        <h2 className="about__content-heading">The Early Years</h2>
        <Paragraph text="Our Orchestra was founded in 1986. Then, a group of idealistic period instrument players was determined to free itself from the shackles of working under an all-powerful music director and take charge of their own destiny." />

        <Paragraph text="Our first concert was on Thursday 26 June at Oxford Town Hall with violinist Sigiswald Kuijken. A second followed the next day at Southbank Centre's Queen Elizabeth Hall in London. The programme included Telemann, Rameau and Haydn's Symphony No. 83 La Poule." />

        <Paragraph text="From there, things happened very fast indeed." />

        <Paragraph text="In 1987, we worked with Simon Rattle to bring a landmark production of Mozart's opera The Marriage of Figaro to Glyndebourne. We also secured a recording contract with Virgin Classics, a broadcast agreement with the BBC, and started planning our first full season of Southbank Centre concerts." />

        <Paragraph text="In the video below, our Leader Margaret Faultless introduces archive BBC footage of us playing Bach's Concerto for Two Violins. " />
      </div>
      {/* Doing things differently section - callout component */}
      <CalloutMedia content={OrchestraImg} isVideo={false}>
        <Paragraph text="its working" />
      </CalloutMedia>

      <div className="about__content">
        <h2 className="about__content-heading">Growing Up</h2>
        <Paragraph text="Pretty quickly, we became a prominent fixture on the UK classical music scene." />

        <Paragraph text="In 1993, we formalised our relationship with Southbank Centre and became an official Resident Orchestra, an association we're proud to have had ever since." />

        <Paragraph text="We returned annually to Glyndebourne, specialising in Baroque and Classical opera by composers including Handel and Mozart." />

        <Paragraph text="In 1994, Simon Rattle took us on our first European tour. This mammoth jaunt featured 12 concerts in 9 cities across the UK, France, Germany, Austria, Italy and the Netherlands." />

        <Paragraph text="We worked with conductors Mark Elder, Iván Fischer and Vladimir Jurowski for the first time. This trio would go on to join Simon Rattle as our Principal Artists." />

        <Paragraph text="And in 1999, we appointed one of the Orchestra's oboes, Cherry Forbes, to become our first permanent Education director." />

        <Paragraph text="In the video below, our current Principal Timpani Adrian Bending talks to violin and founder member Catherine Mackinstosh about her career with the Orchestra, which spanned from 1986 to 2013." />
      </div>
      <OrchestraQuote
        quote="COMPLIANCE IS NOT HEALTHY. WHAT I WANT IS A DIALOGUE."
        author="Vladmir Jurowski"
      />
      <div className="about__content">
        <h2 className="about__content-heading">To The Present Day</h2>
        <Paragraph text="We turned 30 in 2016. While that means we've grown up in many ways, we're still young at heart and adventurous in spirit." />

        <Paragraph text="In 2006 we launched The Night Shift, a pioneering series of late night classical music gigs. Billed as 'classical music, minus the rules', these gigs are aimed at audiences under 35 who aren't attending conventional concerts. They have evolved from large scale events at The Roundhouse and Southbank Centre's Royal Festival Hall to intimate chamber gigs in pubs. Now, we're taking what we've learnt from The Night Shift and are bringing it back to the concert hall." />

        <Paragraph text="In 2008, our offices moved to Kings Place, a brand new building in King's Cross, London, where we also perform concerts." />

        <Paragraph text="We celebrated our 30th birthday in 2016 with a special season of concerts, including Weber's Der Freischütz with Sir Mark Elder and Mahle's Second Symphony with Vladimir Jurowski." />

        <Paragraph text="And in 2017 we blasted off on a journey of exploration, when our Sunday morning music and science series, Bach, the Universe and Everything, was launched." />

        <Paragraph text="2017 also saw the start of Six Chapters of the Enlightenment; six special seasons exploring the era that gave our Orchestra its name. The video below introduces the first of these, Visions, Illusions and Delusions." />

        <Paragraph text="In 2020, we became the very first orchestra in the UK to take up residence in a school. We are immensely proud of our embedded education partnership with Acland Burghley School, and that we can share the next chapter of the OAE story with the wider Camden community." />
      </div>
    </Layout>
  );
};

export default About;
