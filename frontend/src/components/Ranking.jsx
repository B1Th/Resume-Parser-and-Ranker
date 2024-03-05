import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import SplitText from "../SplitText3.min.js";
import Aos from "aos";
import "aos/dist/aos.css";

const UserProfile = ({ id, rank, name, email, score, index }) => {
  return (
    <div className="ranking_container">
      <div
        className="details"
        key={id}
        data-aos="fade-left"
        data-aos-delay={`${index * 400}`}
      >
        <p className="rank field">#{rank}</p>
        <p className="name field">{name}</p>
        <div className="field">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <p>{email}</p>
        </div>
        <div className="field">
          <p>
            <strong>Score</strong> {score.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

const Ranking = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  useEffect(() => {
    const split = new SplitText("#condition", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText("#condition", {
      type: "lines",
      linesClass: "lineParent",
    });
    const jobSplit = new SplitText("#job", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const jobSplitParent = new SplitText("#job", {
      type: "lines",
      linesClass: "lineParent",
    });
    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
    gsap.to(jobSplit.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  });

  const [rankedResumes, setRankedResumes] = useState([]);

  const fetchRankedResumes = async () => {
    try {
      // Fetch ranked resumes
      const rankResponse = await fetch(
        "http://127.0.0.1:8000/get_ranked_resume/",
        {
          method: "GET",
        }
      );

      if (rankResponse.ok) {
        const rankedResumesData = await rankResponse.json();
        setRankedResumes(rankedResumesData.ranked_resumes);
      } else {
        console.error("Error fetching ranked resumes");
      }
    } catch (error) {
      console.error("Error fetching ranked resumes:", error.message);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchRankedResumes();
  }, []);

  return (
    <>
      <div className="profile profile_ranking">
        <h1 data-aos="fade-right">
          Check Your <span className="gradient-text"> Resume </span> Ranking
        </h1>
        <p id="condition">
          The Ranking Is Based On The Matching Between Skills, Years of
          Experience, Degree and Past Job.
        </p>

        {rankedResumes.length > 0 && (
          <p id="job">
            Job: <span>{rankedResumes[0].jobpost.toUpperCase()}</span>
          </p>
        )}

        <div className="ranking">
          {rankedResumes.map((item, index) => (
            <UserProfile
              key={item.id}
              id={item.id}
              rank={index + 1}
              name={item.name}
              email={item.email}
              score={item.score}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ranking;
