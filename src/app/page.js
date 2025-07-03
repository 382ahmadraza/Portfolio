"use client"
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import Navbar from "./common/navbar/Navbar";
import About from "./sections/about/About";
import HeroSection from "./sections/hero-section/HeroSection";
import Skills from "./sections/skills/Skills";
import Services from "./sections/services/Services";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./common/footer/Footer";

export default function Home() {
  return (
    <div  className="font-poppins ">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer/>

    </div>
  );
}
