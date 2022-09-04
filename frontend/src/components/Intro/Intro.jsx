import React from "react";
import "./Intro.css";
// Importing images
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import user from "../../img/user.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassemojy from "../../img/glassemojy.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
// // for darkmode
// import { themeContext } from "../../context/DarkMode/Context";
// import { useContext } from "react";

const Intro = () => {
  //   //for darkmode context
  //   const theme = useContext(themeContext);
  //   const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      {/* Left Side of Intro Section */}
      <div className="i-left">
        <div className="i-name">
          {/* for darkmmode */}
          <span
          //   style={{ color: darkMode ? "white" : "" }}
          >
            Hy! I Am
          </span>
          <span>Random</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            odit, ad facere nulla sunt eius adipisci tempore amet, possimus nisi
            atque assumenda eos provident aspernatur. Ex aliquam architecto unde
            iste!
          </span>
        </div>
        <a href="/courses">
          <button href="/courses" className="button i-button">
            Explore
          </button>
        </a>
        <div className="i-icons">
          <a href="https://www.github.com/" target="_blank" rel="noreferrer">
            <i className="i-social fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedIn.com/" target="_blank" rel="noreferrer">
            <i className="i-social fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="i-social fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Right Side of Intro Section */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={user} alt="" />
        <img src={glassemojy} alt="" />

        <div className="floating-div" style={{ top: "-4%", left: "68%" }}>
          {/* Here we are passing values as props to the FloatingDiv component */}
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>

        <div
          className="floating-div"
          style={{ top: "15.9rem", left: "0.3rem" }}
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>

        {/* Blur effect design */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
