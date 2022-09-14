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

const Reasons = () => {
  return (
    <div className="reasons">
      {/* Left Side of Reason Section */}
      <div className="r-left">
        <span>some reasons</span>
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
            <img style={{ transform: "scale(0.3)" }} src={Certificate} alt="" />
          </div>

          <div className="r-secCircle">
            <img
              style={{ transform: "scale(0.22)", marginRight: "0.4rem" }}
              src={Project}
              alt=""
            />
          </div>

          <div className="r-secCircle">
            <img style={{ transform: "scale(0.2)" }} src={Skill} alt="" />
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

        {/* Background Circles */}
        <div className="r-backCircle blueCircle"></div>
        <div className="r-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Reasons;
