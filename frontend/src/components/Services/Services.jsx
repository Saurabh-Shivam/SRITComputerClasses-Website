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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste facere
          perspiciatis magnam.
          <br /> Placeat eveniet nostrum sed optio eius dolor totam illo ab
          quisquam? Similique animi tempora accusantium aliquam unde sed?
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
            heading={"Heading1"}
            detail={"Skill, Skill, Skill, Skill, Skill"}
          />
        </div>

        {/* Second Card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={Glasses}
            heading={"Heading2"}
            detail={"Skill, Skill, Skill, Skill, Skill"}
          />
        </div>

        {/* Third Card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={Humble}
            heading={"Heading3"}
            detail={"Skill, Skill, Skill, Skill, Skill"}
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
