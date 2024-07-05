import React from "react";
import "./Footer.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={logo} alt=""/> */}
          {/* <p>Insert message</p> */}
        </div>
        <div className="footer-top-right">
          {/* <div className="footer-email-input">
                    <img src={user} alt=""/>
                    <input type="email" placeholder="Enter your email" />
                </div> */}
          {/* <div className="footer-subscribe">Subscribe</div> */}
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Copyright @ Dilshaad Anthony. All rights reserved 2024
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <div className="connect-container">
            <p>Connect with me</p>
            <div className="social-icons">
              <a
                href="https://github.com/DBAnthony-12?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                data-label="Github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/dilshaad-b-anthony-79455b270/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                data-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
