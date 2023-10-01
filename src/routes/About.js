import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg2 from "../components/MainImg2";

const About = () => {
  const ref = React.useRef();
  return (
    <div ref={ref}>
      <MainImg2 heading="ABOUT" text="I am a pasionate Front-End Developer" />
    </div>
  );
};

export default About;
