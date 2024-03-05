import React, { useEffect } from "react";
import landing from "../images/landing.png";
import gsap from "gsap";
import SplitText from "../SplitText3.min.js";
import Aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  useEffect(() => {
    const split = new SplitText("#landing_header", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText("#landing_header", {
      type: "lines",
      linesClass: "lineParent",
    });
    gsap.to(split.lines, {
      duration: 2,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  });

  return (
    <>
      <div className="landing">
        <div className="landing_des">
          <div className="landing_des_content" data-aos="fade-right">
            <div className="landing_header" id="landing_header">
              <h1 id="header">
                Resume parsing <br />
                <span className="gradient-text">simplified </span>using{" "}
                <span className="gradient-text">AI</span>
              </h1>
              <p>
                See how well your resume is read by Application Tracking Systems{" "}
                <br /> (ATS) when applying to jobs.
              </p>
            </div>
            <div className="btn">
              <a href="#gotolearn">Learn More</a>
            </div>
          </div>
        </div>
        <div className="landing_des">
          <div className="landing_img" data-aos="fade-left">
            <img src={landing} alt="landing" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
