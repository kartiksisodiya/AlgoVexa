import React from "react";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import Features from "../components/Features";
import History from "../components/History";
import CTA from "../components/CTA";

const About = () => {
  return (
    <>
      <AboutHero />
      <Features />
      <History />
      <CTA />
      <Footer />
    </>
  );
};

export default About;
