import React from "react";
import "./Card.css";
// // for darkmode
// import { themeContext } from "../../context/DarkMode/Context";
// import { useContext } from "react";

const Card = ({ emoji, heading, detail }) => {
  //   //for darkmode context
  //   const theme = useContext(themeContext);
  //   const darkMode = theme.state.darkMode;
  return (
    // for darkmode
    <div
      className="card"
      // style={{ background: darkMode ? "black" : "" }}
    >
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href="http://www.udemy.com">
        <button
          className="c-button"
          //   // for darkmode
          //   style={{ background: darkMode ? "black" : "" }}
        >
          LEARN MORE
        </button>
      </a>
    </div>
  );
};

export default Card;
