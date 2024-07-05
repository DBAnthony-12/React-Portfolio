import React from "react";
import "./Hero.css";
import me2 from "../../assets/me2.jpg";
import resume from "../../assets/resume.pdf";
import { Link } from "react-scroll";

const Hero = () => {
  const closeMenu = () => {
    // Define closeMenu function if needed
  };

  return (
    <div className="hero">
      <img src={me2} alt="Dilshaad Anthony" />
      <h1>
        <span>Hi, I am Dilshaad Anthony.</span>
        <br /> I am a Full-Stack Software Developer
      </h1>
      <p>
        I am a web development enthusiast, dedicated to crafting responsive and
        user-friendly websites. With a diverse skill set in various programming
        languages, I bring creativity and innovation to every project. Let's
        build something amazing together!
      </p>

      <div className="button-container">
        <div className="know-more">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            onClick={closeMenu}
          >
            <button className="btn">Contact me</button>
          </Link>
        </div>

        <div className="resume-container">
          <a
            href="https://drive.google.com/file/d/1sLInhdiokZ7zArBDzVTjBMGQVCxjyHXa/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <button className="btn">View Resume</button>
          </a>
        </div>

        {/* <div className="contactMe">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset as needed
            duration={500}
            onClick={closeMenu}
          >
            <button className="btn">Contact me</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
