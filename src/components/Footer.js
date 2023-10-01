import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedinIn } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-container">
          <div className="address">
            <FaHome
              size={20}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
            <div>
              <p>Datchet</p>
              <p>SL3</p>
              <p>United Kingdom</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              0774 8431 XXX
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              sorin.adamoiu@gmail.com
            </h4>
          </div>
        </div>
        <div className="right-container">
          <p>
            Thank you for visiting my website! Your interest is greatly
            appreciated. If you have any questions or would like to get in
            touch, please feel free to reach out. I look forward to connecting
            with you!
          </p>
          <div className="social">
          <FaGithub
              size={20}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
            <FaLinkedinIn
              size={20}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
