import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg2 from "../components/MainImg2";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <MainImg2 heading="Portfolio" text="My most recent projects" />
      <Footer />
    </div>
  );
};

export default Portfolio;
