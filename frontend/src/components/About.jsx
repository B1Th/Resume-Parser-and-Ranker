import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import SplitText from "../SplitText3.min.js";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  useEffect(() => {
    const split = new SplitText("#about_paragraph", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText("#about_paragraph", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 5,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  });
  return (
    <>
      <div className="about" id="about">
        <div className="about_container" data-aos="fade-up">
          <h1 className="about_header" id="about_header">
            Revolutionize <span className="gradient-text">Hiring</span> with Our{" "}
            <span className="gradient-text">Resume</span> Wizard!
          </h1>
          <p className="about_paragraph" id="about_paragraph">
            In today's competitive job market, our web app, powered by spaCy,
            transforms recruitment by automating resume parsing. Utilizing
            spaCy's advanced natural language processing, it swiftly extracts
            key information, saving time and ensuring accuracy. The added
            ranking feature intelligently evaluates candidates, providing
            employers with a refined shortlist of the most qualified
            individuals. This innovative tool streamlines hiring, offering a
            competitive advantage in identifying and securing top talent
            swiftly. In a world where speed and accuracy matter, our app is a
            game-changer for making informed hiring decisions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
