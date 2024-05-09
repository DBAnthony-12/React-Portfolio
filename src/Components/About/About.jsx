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
              I comleted my studies in software development and my journey is to
              become a full stack developer. <br />I have built websites with
              the languages: HTML, CSS, JavaSCript. I have also built apps with
              Kotlin <br />
              and Java.
              <br /> I am happy to take on clients projects and build my way up
              on this journery.
            </p>
          </div>{" "}
          <br />
          <br />
          <div className="about-skills">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
