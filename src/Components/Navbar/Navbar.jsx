import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/nameLogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeMenu = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="nav-logo" />
      <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleSidebar} />
      <ul className="nav-menu">
        <li>
          <Link to="Hero" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
            Projects/ Languages
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="nav-connect">
        <a href="https://github.com/DBAnthony-12/chatApp" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/dilshaad-b-anthony-79455b270/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>

      {/* sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleSidebar} />
        <ul>
          <li>
            <Link to="Hero" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>
            Projects/ Languages
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
