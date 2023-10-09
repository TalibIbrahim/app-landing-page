import React from "react";
import { useInView } from "react-intersection-observer";

import "../../index.css";

const Section1 = () => {
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    threshold: 0.5, // Checks if 50% of the section is visible
  });
  return (
    <>
      <section className="Section-1" ref={sectionRef}>
        <nav>
          <div className="logo">
            <h2>Melody</h2>
          </div>
          <div className="links">
            <p>About</p>
            <p>Services</p>
            <p>Pricing</p>
          </div>
        </nav>
        <div className={sectionIsVisible ? "dot-1" : "dot-1__visibility"}></div>
        <div className={sectionIsVisible ? "dot-2" : "dot-2__visibility"}></div>
        <div className={sectionIsVisible ? "dot-3" : "dot-3__visibility"}></div>
        <div className={sectionIsVisible ? "image" : "image-visibility"}>
          <img src="landing-page-girl.png" alt="front" />
        </div>
        <div className="textbox">
          <h2
            className={
              sectionIsVisible ? "textbox-visible__h2" : "textbox-visibility"
            }
          >
            Feel The Music
          </h2>
          <p
            className={`textColor ${
              sectionIsVisible ? "typing" : "textbox-visibility"
            }`}
          >
            Stream Over 20 Thousand Songs with One Click!
          </p>
          <button>Join Now</button>
        </div>
      </section>
    </>
  );
};

export default Section1;
