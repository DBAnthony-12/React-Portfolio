import React from "react";
import "./About.css";
// import purple_wave from "../../assets/purple_wave.jpg";
import Dilshaad from "../../assets/Dilshaad.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <hr /> */}
      </div>
      
      
      <div className="about-sections">
        <div className="about-left">
          <img src={Dilshaad} alt="" />
        </div>

        <div className="about-right">
        <div className="about-paragraph">
          <p>
            Hi, my name is Dilshaad. I am a passionate Software Developer with a deep enthusiasm for the IT field. My journey began with a love for computers and coding, which naturally led me 
            to pursue a career in software development. I completed my studies in Software Development at Rosebank College, which laid the foundation for my current career.
            I am dedicated to helping others by developing websites for those starting businesses or needing an online presence for various reasons. I continuously push the 
            boundaries of technology to solve programming problems and find innovative solutions. When not coding or debugging, I enjoy keeping myself engaged with new 
            challenges and activities. Over the course of my 3-year study period, I have acquired a diverse skill set in various programming languages, frameworks, 
            and tools. My expertise includes:
            <ul>
              <li>Frontend Development: Crafting intuitive and dynamic user interfaces.</li>
              <li>Backend Development: Building robust server-side applications and APIs.</li>
              <li>Database Management: Ensuring efficient data storage and retrieval.</li>
              <li>DevOps: Streamlining deployment processes and maintaining scalable infrastructures.</li>
            </ul>
          </p>
          </div>{" "}
          <br />
          <br />
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Microsoft SQL</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>C# / DotNet</p>
              <hr style={{ width: "40%" }} />
            </div>{" "}
            <br />
            <br />
            <div className="about-achievements">
              <div className="about-achievement">
                <h1>Education</h1>
                <p>Rosebank College</p>
              </div>
              <hr />

              <div className="about-achievement">
                <h1>Projects</h1>
                <p>2</p>
              </div>
              <hr />

              <div className="about-achievement">
                <h1>Skills</h1>
                <p> App Development</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
