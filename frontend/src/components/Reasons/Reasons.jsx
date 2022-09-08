import React from "react";
import "./Reasons.css";
// Importing images
import tick from "../../img/tick.png";
import Project from "../../img/project.png";
import Notes from "../../img/notes.png";
import Job from "../../img/job.png";
import Skill from "../../img/skill.png";
import Certificate from "../../img/certifi.png";
import { Link } from "react-router-dom";
// // for darkmode
// import { themeContext } from "../../context/DarkMode/Context";
// import { useContext } from "react";

const Reasons = () => {
  // //for darkmode context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div className="reasons">
      {/* Left Side of Reason Section */}
      <div className="r-left">
        {/* dark Mode */}
        <span
        // style={{ color: darkMode ? "white" : "" }}
        >
          some reasons
        </span>
        <span>Why Choose Us?</span>

        <div className="r-points">
          <div>
            <img src={tick} alt="" />
            <span>Certificate of appreciation</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>Teacher with more than 12+ years of experience</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>Notes along with Online/Offline test weekly tests</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>Real Life Project Development</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>Job Opportunities</span>
          </div>
        </div>

        <Link to="contact">
          <button className="button s-button">Contact</button>
        </Link>
        {/* Blur effect design, className="blur" styling is done in the Intro.css file */}
        {/* <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div> */}
      </div>

      {/* Right Side of Reason Section */}

      <div className="r-right">
        <div className="r-mainCircle">
          <div className="r-secCircle">
            <img
              style={{ transform: "scale(0.3)", marginLeft: "0.5rem" }}
              src={Notes}
              alt=""
            />
          </div>

          <div className="r-secCircle">
            <img
              // style={{ width: "7rem", height: "7rem" }}
              style={{ transform: "scale(0.3)" }}
              src={Certificate}
              alt=""
            />
          </div>

          <div className="r-secCircle">
            <img
              style={{ transform: "scale(0.22)", marginRight: "0.4rem" }}
              src={Project}
              alt=""
            />
          </div>

          <div className="r-secCircle">
            <img
              // style={{
              //   width: "6rem",
              //   height: "6rem",
              //   transform: "scale(0.5)",
              //   borderRadius: "100%",
              // }}
              style={{ transform: "scale(0.2)" }}
              src={Skill}
              alt=""
            />
          </div>

          <div className="r-secCircle">
            <img
              style={{
                transform: "scale(0.37)",
                marginTop: "1rem",
                marginBottom: "0.1rem",
              }}
              src={Job}
              alt=""
            />
          </div>
        </div>

        {/* Background Cicles */}
        <div className="r-backCircle blueCircle"></div>
        <div className="r-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Reasons;
