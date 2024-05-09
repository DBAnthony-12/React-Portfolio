import React from "react";
import "./Hero.css";
import me2 from "../../assets/me2.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={me2} alt="" />
      <h1>
        <span>Hi, I am Dilshaad Anthony.</span> I am a frontend and backend
        Software Developer
      </h1>
      <p>
        I am Dilshaad, a passionate person who is creative with web development
        with a passion for creating responsive websites and user-friendly
        websites. I learnt various of Languages that consist of different
        platforms of Software development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
