import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

import React, { useState } from "react";

const Navbar = ({ scrollToPage }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const closeNavbar = () => {
    if (window.innerWidth < 768) {
      setClick(false);
    }
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 className="">Sorin Adamoiu</h1>
      </Link>
      <nav className={click ? "nav active" : "nav"}>
        <a
          sx="--color #a3aaae"
          onClick={() => {
            scrollToPage("home");
            closeNavbar();
          }}
        >
          Home
        </a>
        <a
          sx="--color #a3aaae"
          onClick={() => {
            scrollToPage("about");
            closeNavbar();
          }}
        >
          About
        </a>
        <a
          sx="--color #a3aaae"
          onClick={() => {
            scrollToPage("portfolio");
            closeNavbar();
          }}
        >
          Portfolio
        </a>
        <a
          sx="--color #a3aaae"
          onClick={() => {
            scrollToPage("contact");
            closeNavbar();
          }}
        >
          Contact
        </a>
      </nav>
      <div className="menu" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
