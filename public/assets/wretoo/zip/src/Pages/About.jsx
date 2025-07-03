import React from 'react'
import Journey from '../components/about/Journey'
import MissionVision from '../components/about/MissionVision'
import OurValues from '../components/about/OurValues'
import Testimonials from '../components/about/Testimonials'
import Experience from '../components/about/Experience'
import AboutHero from '../components/about/AboutHero'
const About = () => {
  return (
    <div>
      <AboutHero/>
      <Journey/>
      <MissionVision/>
      <OurValues/>
      <Experience />
      <Testimonials />
    </div>
  );
};

export default About;
