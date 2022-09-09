// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import Bars from "../../img/orbar.png";
// // import Toggle from "../Toggle/Toggle";

// const Navbar = () => {
//   const [showLists, setShowLists] = useState(false);

//   return (
//     <div className="n-wrapper">
//       {/* Left side of the Navbar */}
//       <div className="n-left">
//         <div className="n-name">Random</div>
//         {/* <Toggle /> */}
//         Toggle
//       </div>

//       {/* Right side of the Navbar */}

//       <div className="n-right"></div>
//       <div className={showLists ? "n-list mobile-menu-list" : "n-list"}>
//         <ul style={{ listStyleType: "none" }}>
//           <li>
//             <Link className="n-link" to="/">
//               {" "}
//               Home{" "}
//             </Link>
//           </li>

//           <li>
//             <Link className="n-link" to="courses">
//               {" "}
//               Courses{" "}
//             </Link>
//           </li>
//           <li>
//             {" "}
//             <Link className="n-link" to="about">
//               {" "}
//               About{" "}
//             </Link>
//           </li>
//           <li>
//             {" "}
//             <Link className="n-link" to="contact">
//               {" "}
//               Contact{" "}
//             </Link>
//           </li>
//           <li>
//             {" "}
//             <Link className="n-link" to="login">
//               {" "}
//               Login{" "}
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div id="hamburger-menu" onClick={() => setShowLists(!showLists)}>
//         <Link to="#/">
//           <img
//             style={{
//               // filter: "brightness(0%)",
//               width: "2rem",
//               // height: "0.5rem",
//             }}
//             src={Bars}
//             alt=""
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../img/sritlogo.png";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      {/* <img
        style={{ transform: "scale(0.3)" }}
        className="nav-logo"
        src={Logo}
        alt=""
      /> */}
      <span className="nav-logo">SRIT Computer Classes</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link id="nav-link" to="/">
          Home
        </Link>
        <Link id="nav-link" to="courses">
          Courses
        </Link>
        <Link id="nav-link" to="contact">
          Contact
        </Link>
        <Link id="nav-link" to="about">
          About
        </Link>
        <Link id="nav-link" to="gallery">
          Gallery
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
