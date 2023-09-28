import { Link } from "react-router-dom"
import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"

import React, { useState } from "react";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to="/">
            <h1>Sorin Adamoiu</h1>
        </Link>
        <ul className={click ? "nav active" : "nav"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="menu" onClick ={handleClick}>
          {click ? (
          <FaTimes 
            size={20}
            style={{ color: "#fff" }}
          /> 
          ) : (
          <FaBars
            size={20}
            style={{ color: "#fff" }}
          />
          )}
        </div>
    </div>
  );
};

export default Navbar