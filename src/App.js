import React, { useState } from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Portfolio from "./routes/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";

const App = () => {
  const homeRef = React.useRef();
  const aboutRef = React.useRef();
  const portfolioRef = React.useRef();
  const contactRef = React.useRef();

  const [currentPage, setCurrentPage] = useState("home");

  const scrollToPage = (page) => {
    switch (page) {
      case "home":
        window.scrollTo(0, homeRef.current.offsetTop);
        break;
      case "about":
        window.scrollTo(0, aboutRef.current.offsetTop);
        break;
      case "portfolio":
        window.scrollTo(0, portfolioRef.current.offsetTop);
        break;
      case "contact":
        window.scrollTo(0, contactRef.current.offsetTop);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar scrollToPage={scrollToPage} />

      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={portfolioRef}>
        <Portfolio />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
      <ScrollIndicator />
      <Footer />
    </div>
  );
};

export default App;
