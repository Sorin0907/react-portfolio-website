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

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 className="">Sorin Adamoiu</h1>
      </Link>
      <nav className={click ? "nav active" : "nav"}>
        <a onClick={() => scrollToPage("home")}>Home</a>
        <a onClick={() => scrollToPage("about")}>About</a>
        <a onClick={() => scrollToPage("portfolio")}>Portfolio</a>
        <a onClick={() => scrollToPage("contact")}>Contact</a>
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
