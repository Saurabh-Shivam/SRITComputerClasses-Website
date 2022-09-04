import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Bars from "../../img/orbar.png";
// import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  const [showLists, setShowLists] = useState(false);

  return (
    <div className="n-wrapper">
      {/* Left side of the Navbar */}
      <div className="n-left">
        <div className="n-name">Random</div>
        {/* <Toggle /> */}
        Toggle
      </div>

      {/* Right side of the Navbar */}

      <div className="n-right"></div>
      <div className={showLists ? "n-list mobile-menu-list" : "n-list"}>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link className="n-link" to="/">
              {" "}
              Home{" "}
            </Link>
          </li>

          <li>
            <Link className="n-link" to="courses">
              {" "}
              Courses{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link className="n-link" to="about">
              {" "}
              About{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link className="n-link" to="contact">
              {" "}
              Contact{" "}
            </Link>
          </li>
        </ul>
      </div>

      <div id="hamburger-menu" onClick={() => setShowLists(!showLists)}>
        <Link to="#/">
          <img
            style={{
              // filter: "brightness(0%)",
              width: "2rem",
              // height: "0.5rem",
            }}
            src={Bars}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
