import React from "react";
import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright">
      <span>© 2022 SRIT. All rights reserved.</span>{" "}
      <a
        className="developer"
        href="https://github.com/Saurabh-Shivam"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <br />
          Developed by Saurabh
        </span>
      </a>
    </div>
  );
};

export default Copyright;
