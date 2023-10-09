import React from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";

const Section4 = () => {
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    threshold: 0.5, // Checks if 50% of the section is visible
  });
  return (
    <section className="Section-4" ref={sectionRef}>
      <div className="textbox-4">
        <h2>
          Join the{" "}
          <span
            className={sectionIsVisible ? "text-design" : "text-visibility"}
          >
            fun.
          </span>
        </h2>
      </div>
      <div className="form-container">
        <div className="input-group">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
        </div>
        <button>Join Now</button>
      </div>
      <footer>
        <div className="link-group-1">
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div className="logo-2">
          <h2>
            Melody <span className="span-text">&copy;</span>
          </h2>
        </div>
        <div className="link-group-2">
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </footer>
    </section>
  );
};

export default Section4;
