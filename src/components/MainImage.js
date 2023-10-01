import "./MainImage.css";

import React from "react";
import { Link } from "react-router-dom";

const MainImage = () => {
  return (
    <div className="main-image">
      <div className="content">
        <p>HI, I'M A SOFTWARE DEVELOPER</p>
        <div>
          <Link to="/portfolio" className="btn">
            Portfolio
          </Link>
          <Link to="/contact" className="btn btn2">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
