import "./MainImage.css";

import React from 'react'
import FrontImg from "../fixtures/FrontImg.png"
import { Link } from "react-router-dom";

const MainImage = () => {
  return (
    <div className="main-image">
        <div className="cover">
            <img className="front-img" src={FrontImg} alt="frontImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A SOFTWARE DEVELOPER</p>
        </div>
        <div>
            <Link to="/portfolio" className="btn">Portfolio</Link>
            <Link to="/portfolio" className="btn btn2">Contact</Link>
        </div>
    </div>
  );
};

export default MainImage