import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import reactjs from "../images/reactjs.png";
import css from "../images/css.png";
import django from "../images/django.png";
import javascript from "../images/javascript.png";
import sqlite from "../images/sqlite.png";
import rest from "../images/rest.png";
import spacy from "../images/spacy.png";
import vscode from "../images/vscode.png";
import colab from "../images/colab.png";

const technologyData = [
  { image: reactjs, text: "ReactJS" },
  { image: css, text: "CSS" },
  { image: django, text: "Django" },
  { image: javascript, text: "JavaScript" },
  { image: sqlite, text: "SQLite" },
  { image: rest, text: "REST" },
  { image: spacy, text: "spaCy" },
  { image: vscode, text: "VS Code" },
  { image: colab, text: "Google Colab" },
];

const Technologies = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <div className="technologies">
        {technologyData.map((tech, index) => (
          <div
            key={index}
            className="tech_container"
            data-aos="fade-right"
            data-aos-delay={`${index * 200}`}
          >
            <div className="tech_logo">
              <img src={tech.image} alt={tech.text} />
            </div>
            <p>{tech.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Technologies;
