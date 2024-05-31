import React from "react";
import "./LanguagesSection.css"; // Ensure you have appropriate CSS
import data from "../../data/index.json"; // Adjust the path if necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJava,
  faJs,
  faNodeJs,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const getIcon = (title) => {
  switch (title) {
    case "HTML":
      return faHtml5;
    case "CSS":
      return faCss3;
    case "JavaScript":
      return faJs;
    case "Java":
      return faJava;
    case "Node.js":
      return faNodeJs;
    case "React":
      return faReact;
    case "Database":
      return faDatabase;
    default:
      return null;
  }
};

const LanguagesSection = () => {
  return (
    <div className="languages-section">

      <section className="skills-section">
        <div className="portfolio-container">
          <h2 className="skills-section-heading">My Skills</h2>
        </div>
        <div className="skills-section-container">
          {data?.skills?.map((item, index) => (
            <div key={index} className="skills-section-card">
              <div className="skills-section-img">
                <FontAwesomeIcon icon={getIcon(item.title)} className="icon-style" />
              </div>
            <div className="skills-section-card-content">
              <h3 className="skills-section-title" style={{ color: 'white' }}>{item.title}</h3>
              <p className="skills-section-description" style={{ color: 'white' }}>{item.description}</p>
           </div>
          </div>
          ))}
        </div>
      </section>

      <section className="framework-section">
        <div className="portfolio-container">
          <h2 className="framework-section-heading">My Framework/ Database</h2>
        </div>
        <div className="framework-section-container">
          {data?.framework?.map((item, index) => (
            <div key={index} className="framework-section-card">
              <div className="framework-section-img">
                <FontAwesomeIcon icon={getIcon(item.title)} className="icon-style" />
              </div>
            <div className="framework-section-card-content">
              <h3 className="framework-title" style={{ color: 'white' }}>{item.title}</h3>
              <p className="framework-section-description" style={{ color: 'white' }}>{item.description}</p>
            </div>
            </div>
          ))}
        </div>

        <div className="database-section-container">
          {data?.databases?.map((item, index) => (
            <div key={index} className="database-section-card">
              <div className="database-section-img">
                <FontAwesomeIcon icon={getIcon(item.title)} className="icon-style" />
              </div>
            <div className="database-section-card-content">
              <h3 className="database-section-title" style={{ color: 'white' }}>{item.title}</h3>
              <p className="database-section-description" style={{ color: 'white' }}>{item.description}</p>
            </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LanguagesSection;
