import { useInView } from "react-intersection-observer";
import "../../index.css";

const Section2 = () => {
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    threshold: 0.5, // Checks if 50% of the section is visible
  });

  return (
    <section className="Section-2" ref={sectionRef}>
      <div className={sectionIsVisible ? "textbox-2" : "textbox-2__visibility"}>
        <h2>Discover New Music</h2>
      </div>

      <div className="cards-container">
        <div
          className={`music-card ${
            sectionIsVisible ? "card-1" : "card-1__visibility"
          }`}
        >
          <img src="hills.jpg" alt="album-cover" />
          <h2>The Hills</h2>
          <p>The Weeknd</p>
        </div>
        <div
          className={`music-card ${
            sectionIsVisible ? "card-2" : "card-2__visibility"
          }`}
        >
          <img src="ocean.jpeg" alt="album-cover" />
          <h2>Ocean Eyes</h2>
          <p>Billie Eilish</p>
        </div>
        <div
          className={`music-card ${
            sectionIsVisible ? "card-3" : "card-3__visibility"
          }`}
        >
          <img src="bikhra.jpeg" alt="album-cover" />
          <h2>Bikhra</h2>
          <p>Abdul Hannan</p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
