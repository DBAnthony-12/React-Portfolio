import React from "react";
import "./Hero.css";
import me2 from "../../assets/me2.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={me2} alt="" />
      <h1>
        <span>Hi, I am Dilshaad Anthony.</span><br></br> I am a frontend and backend
        Software Developer
      </h1>
      <p>
      Hello!, I'm a web development enthusiast, dedicated to crafting responsive and user-friendly websites. With a diverse skill set in various 
      programming languages, I bring creativity and innovation to every project. Let's build something amazing together!
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
