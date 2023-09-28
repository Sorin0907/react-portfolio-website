import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Portfolio from "./routes/Portfolio";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/contact" element={<Contact />}/>
     </Routes>
   </>
  );
}

export default App;
