import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg2 from "../components/MainImg2";
import Work from "../components/Work";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <MainImg2 heading="Portfolio" text="My most recent projects" />
      <Work />
      <Footer />
    </div>
  );
};

export default Portfolio;
