import React, { useState } from "react";
import "./Gallery.css";
// Importing images
import leftArrow from "../../img/leftArrow.png";
import rightArrow from "../../img/rightArrow.png";

import { GalleryData } from "../../Data/GalleryData";

const Gallery = () => {
  const [selected, setSelected] = useState(0);
  const tLength = GalleryData.length;
  return (
    <div className="gallery">
      <div className="g-left">
        <div className="g-head">
          {/* for darkmode */}
          <span
          //  style={{ color: darkMode ? "white" : "" }}
          >
            Gallery
          </span>
          <span>Some of our</span>
          <span
          // style={{ color: darkMode ? "white" : "" }}
          >
            Memories
          </span>
        </div>
      </div>

      <div className="g-right">
        <img src={GalleryData[selected].img} alt="" />

        <div className="g-arrows">
          <img
            onClick={() => {
              // if we are on the first testimonial then
              selected === 0
                ? // this will return the last testimonial on clicking leftArrow button
                  setSelected(tLength - 1)
                : // if we are not on the first testimonial then it will take the previous value of the selected
                  // and will return (prev-1)th testimonial
                  setSelected((prev) => prev - 1);
            }}
            src={leftArrow} // This is always return the previous testimonial
            alt=""
          />
          <img
            onClick={() => {
              // if we are on the last testimonial then
              selected === tLength - 1
                ? // this will return the first testimonial on clicking righttArrow button
                  setSelected(0)
                : // if we are not on the last testimonial then it will take the previous value of the selected
                  // and will return (prev+1)th testimonial
                  setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
