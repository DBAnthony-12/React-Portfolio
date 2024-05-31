import React from "react";
import "./Service.css";
import data from "../../data/index.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJava,
  faJs,
  faNodeJs,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import csharp from "../../assets/c-sharp.png";
import dotnet from "../../assets/dotnet.jpg";
import oracle from "../../assets/oracle.jpg";
import sql from "../../assets/sql.jpg";

const Service = () => {
  return (
    // <div className="skills-section">
    //   <div className="service-title">
    //     <h1>
    //       <span>Languages</span>
    //     </h1>
    //   </div>

    <section className="skills-section" id="mySkills">
    <div className="portfolio-container">
      <p className="section-title">My Skills</p>
      <h2 className="skills-section-heading">My Expertise</h2>
    </div>
    <div className="skills-section-container">
      {data?.skills?.map((item, index) => (
        <div key={index} className="skills-section-card">
          <div className="skills-section-img">
            {/* <img src="" alt=""/> */}
          </div>
          <div className="skills-section-card-content">
            <h3 className="skills-section-title">{item.title}</h3>
            <p className="skills-section-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    {/* Render framework section */}
    <section className="framework-section">
      <div className="portfolio-container">
        <p className="framework-section-title">Frameworks</p>
        <h2 className="framework-section-heading">My Frameworks</h2>
      </div>
      <div className="framework-section-container">
        {/* Render framework cards */}
        {data?.framework?.map((item, index) => (
          <div key={index} className="framework-section-card">
            <div className="framework-section-img">
              {/* <img src="" alt=""/> */}
            </div>
            <div className="framework-section-card-content">
              <h3 className="framework-title">{item.title}</h3>
              <p className="framework-section-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <section className="database-section">
        <div className="portfolio-container">
          <p className="database-title">Databases</p>
          <h2 className="database-section-heading">My Databases</h2>
        </div>
        <div className="database-section-container">
          {/* Render database cards */}
          {data?.databases?.map((item, index) => (
            <div key={index} className="database-section-card">
              <div className="database-section-img">
                {/* <img src="" alt=""/> */}
              </div>
              <div className="database-section-card-content">
                <h3 className="database-section-title">{item.title}</h3>
                <p className="database-section-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  </section>  
  );
};
export default Service;

 {/* <div className="icon-container">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faHtml5} className="icon-style" />
          <p>HTML</p>
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faCss3} className="icon-style" />
          <p>CSS</p>
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faJava} className="icon-style" />
          <p>Java</p>
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faJs} className="icon-style" />
          <p>JavaScript</p>
        </div>
       
        <br></br>
      </div>

      <div className="image-wraper">
        <div className="image">
          <img src={dotnet} alt="" className="dotnet-image" />
          <p>.NET</p>
        </div>

        <div className="image">
          <img src={csharp} alt="" className="dotnet-image" />
          <p>C# (C-Sharp)</p>
        </div>
      </div>

      <h2>FrameWork</h2>

      <div className="framework">
      <div className="icon-framework">
          <FontAwesomeIcon icon={faNodeJs} className="icon-style" />
          <p>NodeJs</p>
        </div>

        <div className="icon-framework">
          <FontAwesomeIcon icon={faReact} className="icon-style" />
          <p>ReactJs</p>
        </div>
      </div>
      
        <h3>Databases</h3>

        <div className="database">
          <div className="database-icon">
            <img src={oracle} alt="" className="database-image" />
            <p>Oracle</p>
          </div>

          <div className="database-icon">
            <img src={sql} alt="" className="database-image" />
            <p>SQL</p>
          </div>
  </div>*/}
