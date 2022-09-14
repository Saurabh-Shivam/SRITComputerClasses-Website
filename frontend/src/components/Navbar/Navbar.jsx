import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/sritlogo.png";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-head">SRIT Computer Classes</span>
      <img
        id="navLogo"
        style={{ width: "2rem", height: "2rem", marginLeft: "-18rem" }}
        src={Logo}
        alt=""
      />
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link id="nav-link" to="/">
          Home
        </Link>
        <Link id="nav-link" to="courses">
          Courses
        </Link>
        <Link id="nav-link" to="contact">
          Contact
        </Link>
        <Link id="nav-link" to="about">
          About
        </Link>
        <Link id="nav-link" to="gallery">
          Gallery
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
