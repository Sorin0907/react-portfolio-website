import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg2 from "../components/MainImg2";

const About = () => {
  return (
    <div>
      <Navbar />
      <MainImg2 heading="ABOUT" text="I am a pasionate Front-End Developer" />
      <Footer />
    </div>
  );
};

export default About;
