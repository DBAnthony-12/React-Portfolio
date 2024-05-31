import React from "react";
import "./LanguagesSection.css"; // Ensure you have appropriate CSS
import data from "../../data/index.json"; // Adjust the path if necessary

const LanguagesSection = () => {
  return (
    <div className="languages-section">

      <section className="skills-section">
        <div className="portfolio-container">
          <p className="section-title">My Skills</p>
          <h2 className="skills-section-heading">My Expertise</h2>
        </div>
        <div className="skills-section-container">
          {data?.skills?.map((item, index) => (
            <div key={index} className="skills-section-card">
              <div className="skills-section-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="skills-section-card-content">
                <h3 className="skills-section-title">{item.title}</h3>
                <p className="skills-section-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="framework-section">
        <div className="portfolio-container">
          <p className="framework-section-title">Frameworks</p>
          <h2 className="framework-section-heading">My Frameworks</h2>
        </div>
        <div className="framework-section-container">
          {data?.framework?.map((item, index) => (
            <div key={index} className="framework-section-card">
              <div className="framework-section-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="framework-section-card-content">
                <h3 className="framework-title">{item.title}</h3>
                <p className="framework-section-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="database-section">
        <div className="portfolio-container">
          <p className="database-title">Databases</p>
          <h2 className="database-section-heading">My Databases</h2>
        </div>
        <div className="database-section-container">
          {data?.databases?.map((item, index) => (
            <div key={index} className="database-section-card">
              <div className="database-section-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="database-section-card-content">
                <h3 className="database-section-title">{item.title}</h3>
                <p className="database-section-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LanguagesSection;
