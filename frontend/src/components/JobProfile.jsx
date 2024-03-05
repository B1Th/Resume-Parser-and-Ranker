import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUserGear,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const UserProfile = ({ id, jobpost, degree, skills, experience }) => {
  // Remove square brackets and single quotes from the skills string
  const cleanedSkills = skills.replace(/[[\]']+/g, "");

  // Split the cleanedSkills string using commas and trim each skill
  const parsedSkills = cleanedSkills.split(",").map((skill) => skill.trim());

  return (
    <div className="profile_container">
      <div className="profile_container_content" key={id}>
        <h3>ID: {id}</h3>
        <h2 className="profile_name">{jobpost}</h2>

        <div className="decorative-underline" />

        <div className="profile_details">
          <div className="field">
            <div className="icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <p>
              <strong>Degree:</strong> {degree}
            </p>
          </div>
          <div className="field skill">
            <div className="icon">
              <FontAwesomeIcon icon={faUserGear} />
            </div>
            <p>
              <strong>Skills:</strong>{" "}
              {Array.isArray(parsedSkills)
                ? parsedSkills.map((skill, index) => (
                    <div className="skill_content">
                      <span key={index}>{skill}</span>
                    </div>
                  ))
                : "Skills data not available"}
            </p>
          </div>
          <div className="field">
            <div className="icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <p>
              <strong>Experience:</strong> {experience}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobProfile = () => {
  const [parsedjdData, setparsedjdData] = useState([]);

  const fetchData = async () => {
    const myHeaders = new Headers();
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/get_parsedjd_data/",
        requestOptions
      );
      const result = await response.json();

      if (result.parsedjd_data) {
        const latestJDData = result.parsedjd_data;

        // Update state with the latest JD data
        setparsedjdData([latestJDData]);
      } else {
        // Handle case when no data is available
        setparsedjdData([]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleFetchData = () => {
    // Trigger data fetching when the button is clicked
    fetchData();
  };

  return (
    <>
      <div className="profile">
        <h1>
          HR <span className="gradient-text">Solutions</span>
        </h1>
        <button onClick={handleFetchData} className="fetch_btn">
          Show Job
        </button>

        {parsedjdData.map((item) => (
          <UserProfile
            key={item.id}
            id={item.id}
            jobpost={item.jobpost}
            degree={item.degree}
            worked_as={item.worked_as}
            skills={item.skills}
            experience={item.experience}
          />
        ))}
      </div>
    </>
  );
};

export default JobProfile;
