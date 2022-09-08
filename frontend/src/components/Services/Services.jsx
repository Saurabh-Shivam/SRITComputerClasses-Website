import React from "react";
import "./Services.css";
// Importing images
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
// Importing pdf file
import myServices from "./myServices.pdf";
// // for darkmode
// import { themeContext } from "../../context/DarkMode/Context";
// import { useContext } from "react";

const Services = () => {
  // //for darkmode context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="services">
      {/* Left Side of Service Section */}
      <div className="s-left">
        {/* for darkmode */}
        <span
        //  style={{ color: darkMode ? "white" : "" }}
        >
          My Special
        </span>
        <span>services</span>
        <span>
          For both technical and non-technical background students we provide
          some job oriented Modular/Special courses, from basics to advance
          level.
        </span>
        {/* This will enable the user to download the uploaded file */}
        <a href={myServices} download>
          <button className="button s-button">Download</button>
        </a>

        {/* Blur effect design, className="blur" styling is done in the Intro.css file */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side of Service Section */}
      <div className="s-right">
        {/* First Card */}
        <div style={{ left: "12rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={HeartEmoji}
            heading={"ADCA"}
            detail={
              "Computer Fundamentals, Windows, MS-Office, Internet, C, C++, HTML, Tally, DTP"
            }
          />
        </div>

        {/* Second Card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={Glasses}
            heading={"Full Stack Web Development"}
            detail={
              "HTML, CSS, Javascript, Node, React, MongoDB and Deployment and many other things in depth!"
            }
          />
        </div>

        {/* Third Card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={Humble}
            heading={"Project Development"}
            detail={
              "you will learn about real world project(Software/App Development) along with it's deployment on Google."
            }
          />
        </div>
        {/* Blur effect design, className="blur" styling is done in the Intro.css file */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
