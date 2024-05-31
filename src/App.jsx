import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";

import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./Components/Projects/Projects";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
  
      <MyWork />
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
