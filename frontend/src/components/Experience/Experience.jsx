import React from "react";
import "./Experience.css";
// This section consists of special achievements done by the User throughout his journey
const Experience = () => {
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle">12+</div>
        <span>years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle">25+</div>
        <span>batches</span>
        <span>Successfully completed</span>
      </div>

      <div className="achievement">
        <div className="circle thirdCir">100+</div>
        <span>students</span>
        <span>Placed</span>
      </div>
    </div>
  );
};

export default Experience;
