import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link to="/courses">
        <button className="c-button">LEARN MORE</button>
      </Link>
    </div>
  );
};

export default Card;
