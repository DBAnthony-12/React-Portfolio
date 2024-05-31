import React from "react";
import "./MyWork.css";
import data from "../../data/index.json";

const MyWork = () => {
  return (
    <div className="portfolio-section-container">
      {data?.portfolio?.map((item, index) => (
        <div key={index} className="portfolio-section-card">
          <div className="portfolio-section-img">
            <img src={item.src} alt={item.title} />
          </div>
          <div className="portfolio-section-card-content">
            <div>
              <h3 className="portfolio-section-title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
            </div>
            <p className="text-sm portfolio-link">{item.link}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyWork;
