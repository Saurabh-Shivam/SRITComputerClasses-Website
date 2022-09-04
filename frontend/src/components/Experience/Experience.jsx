import React from "react";
import "./Experience.css";
// // for darkmode
// import { themeContext } from "../../context/DarkMode/Context";
// import { useContext } from "react";

// This section consists of special achievements done by the User throughout his journey
const Experience = () => {
  // //for darkmode context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievement">
        <div
          className="circle"
          // for darkmode
          // style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          x+
        </div>
        {/* for darkmode */}
        <span
        // style={{ color: darkMode ? "white" : "" }}
        >
          years
        </span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div
          className="circle"
          // for darkmode
          // style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          y+
        </div>
        {/* for darkmode */}
        <span
        // style={{ color: darkMode ? "white" : "" }}
        >
          students
        </span>
        <span>Placed</span>
      </div>

      <div className="achievement">
        <div
          className="circle thirdCir"
          // for darkmode
          // style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          z+
        </div>
        {/* for darkmode */}
        <span
        // style={{ color: darkMode ? "white" : "" }}
        >
          different
        </span>
        <span>Institutes Worked</span>
      </div>
    </div>
  );
};

export default Experience;
