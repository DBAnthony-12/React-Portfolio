import React from "react";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJava,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import csharp from "../../assets/c-sharp.png";
import dotnet from "../../assets/dotnet.jpg";
import oracle from "../../assets/oracle.jpg";
import sql from "../../assets/sql.jpg";

const Service = () => {
  return (
    <div className="services">
      <div className="service-title">
        <h1>
          <span>Languages</span>
        </h1>
      </div>

      <div className="icon-container">
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
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faNodeJs} className="icon-style" />
          <p>NodeJs</p>
        </div>{" "}
        <br></br>
      </div>

      <div className="image-wraper">
        <div className="image">
          <img src={dotnet} alt="" className="dotnet-image" />
          <p>.NET</p>
        </div>

        <div className="image">
          <img src={oracle} alt="" className="dotnet-image" />
          <p>Oracle</p>
        </div>

        <div className="image">
          <img src={sql} alt="" className="dotnet-image" />
          <p>SQL</p>
        </div>

        <div className="image">
          <img src={csharp} alt="" className="dotnet-image" />
          <p>C# (C-Sharp)</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
