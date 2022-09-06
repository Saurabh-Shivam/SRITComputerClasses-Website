import React from "react";
// import Teacher from "../../img/teacher.jpg";
import Owner from "../../img/owner.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="a-up">
        {/* <img src={Teacher} alt="" /> */}
        <img src={Owner} alt="" />
      </div>

      <div className="a-down">
        <div className="a-para">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus veniam placeat natus, explicabo beatae autem illo
            minus consectetur iste, mollitia quis vel error laboriosam maiores!
            Expedita unde vero quia sed? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus veniam placeat natus, explicabo
            beatae autem illo minus consectetur iste, mollitia quis vel error
            laboriosam maiores! Expedita unde vero quia sed? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Necessitatibus veniam placeat
            natus, explicabo beatae autem illo minus consectetur iste, mollitia
            quis vel error laboriosam maiores! Expedita unde vero quia sed?
          </span>
        </div>
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
  );
};

export default About;
