import React from "react";
import { useInView } from "react-intersection-observer";

import "../../index.css";

const Section3 = () => {
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    threshold: 0.5, // Checks if 50% of the section is visible
  });
  return (
    <section className="Section-3" ref={sectionRef}>
      <div>
        <div
          className={`icon-card ${
            sectionIsVisible ? "iconCard-1" : "iconCard-1__visibility"
          }`}
        >
          <div className="icon">
            <img src="walking.png" alt="walk" />
          </div>
          <p>Walk to the Beat of Your Music</p>
        </div>
        <div
          className={`icon-card ${
            sectionIsVisible ? "iconCard-2" : "iconCard-2__visibility"
          }`}
        >
          <div className="icon">
            <img src="car.png" alt="car" />
          </div>
          <p>Find Music for Every Journey</p>
        </div>
        <div
          className={`icon-card ${
            sectionIsVisible ? "iconCard-3" : "iconCard-3__visibility"
          }`}
        >
          <div className="icon">
            <img src="bike.png" alt="bike" />
          </div>
          <p>Take Your Music on Two Wheels</p>
        </div>
      </div>
      <div className="textbox-3">
        <h2
          className={`text-gradient ${
            sectionIsVisible ? "typing" : "textbox-visibility"
          }`}
        >
          Stream Music Anywhere
        </h2>
        <p>Listen Along with Your Friends</p>
      </div>
    </section>
  );
};

export default Section3;
