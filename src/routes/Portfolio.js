import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg2 from "../components/MainImg2";
import Work from "../components/Work";

const Portfolio = () => {
  const ref = React.useRef();
  return (
    <div ref={ref}>
      <MainImg2 heading="Portfolio" text="My most recent projects" />
      <Work />
    </div>
  );
};

export default Portfolio;
