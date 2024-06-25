import React from "react";
import "./Hero.css";
import me2 from "../../assets/me2.jpg";
import resume from "../../assets/resume.pdf"
import { Link } from "react-scroll";

const Hero = () => {
  const closeMenu = () => {
    // Define closeMenu function if needed
  };

  return (
    <div className="hero">
      <img src={me2} alt="Dilshaad Anthony" />
      <h1>
        <span>Hi, I am Dilshaad Anthony.</span><br /> I am a full-Stack
        Software Developer
      </h1>
      <p>
        Hello!, I'm a web development enthusiast, dedicated to crafting responsive and user-friendly websites. With a diverse skill set in various 
        programming languages, I bring creativity and innovation to every project. Let's build something amazing together!
      </p>
      <div className="hero-action">
        <div className="nav-connect">
          <Link to="contact" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>
            Connect with me
          </Link>
        </div>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">View Resume</div>
        </a>
        <div className="contactMe">Contact me</div>
      </div>
    </div>
  );
};

export default Hero;
