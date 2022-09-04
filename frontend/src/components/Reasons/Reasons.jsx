import React from "react";
import "./Reasons.css";
// Importing images
import tick from "../../img/tick.png";
import Amazon from "../../img/amazon.png";
import Upwork from "../../img/Upwork.png";
import Facebook from "../../img/Facebook.png";
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
            <span>Lorem ipsum dolor sit amet consectetur</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>Iste facere jgnsdignsg nfsofnsopf perspiciatis magnam</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>Iste facere jgnsdignsg nfsofnsopf perspiciatis magnam</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>ab quisquam? Similique animi tempora accusa</span>
          </div>
        </div>

        <Link to="contact">
          <button className="button s-button">Download</button>
        </Link>
        {/* Blur effect design, className="blur" styling is done in the Intro.css file */}
        {/* <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div> */}
      </div>

      {/* Right Side of Reason Section */}

      <div className="r-right">
        <div className="r-mainCircle">
          <div className="r-secCircle">
            <img src={Upwork} alt="" />
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
            <img src={Amazon} alt="" />
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
            <img src={Facebook} alt="" />
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
