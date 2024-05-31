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
              Hi, My name is Dilshaad. I am a Software Developer with a passion for IT especially for my career wise. I enjoy coding and I have always liked computers. <br></br>
              I completed my studies in Software Development at Rosebank College which lead me to my career where I am at now. <br></br> I am dedicated to helping others with work as well as making websites for people who are in need to start a business or for any reason why a website is needed. <br></br> 
              i also push myself into the technology boundaries to solve any programming problem and find a solution to the problem. When I am not busy with coding or debugging, I intend to find something to keep myself occupied. <br></br><br></br>

              I believe that learning new things can make an improvement that is why I enjoy learning new programming languages and debugging problems <br></br>if I run into any problems.
              I started to learn how to code in hugh school and college and because of my interested in coding, I decided to take this career path. <br></br> 
              I am open to anyone who wants me to make websites for them. Do not hesitate to conatct me. 
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
