import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/courses">
        <button
          className="c-button"
          //   // for darkmode
          //   style={{ background: darkMode ? "black" : "" }}
        >
          LEARN MORE
        </button>
      </Link>
    </div>
  );
};

export default Card;
