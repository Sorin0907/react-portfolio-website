import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg2 from "../components/MainImg2";

const Contact = () => {
  const ref = React.useRef();
  return (
    <div ref={ref}>
      <MainImg2 heading="CONTACT" text="Let's connect" />
    </div>
  );
};

export default Contact;
