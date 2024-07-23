import React from "react";
import "./Projects.css";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"; // Ensure this path is correct
import project1 from "../../assets/project1.png";
import project2 from "../../assets/BuzzChatApp.png";
import project3 from "../../assets/LandingPage.png";
import project4 from "../../assets/Tic-Tac-Toe.png";
import project5 from "../../assets/Calcu.png";
import project6 from "../../assets/Bankingapp.png";
import project7 from "../../assets/LMS.png";
import Card from "react-bootstrap/Card";
import LanguagesSection from "./LanguagesSection";

export const Projects = () => {
  const projects = [
    {
      title: " Website",
      description: " HTML&CSS Fashion Set Go Project",
      imgUrl: project1,
      link: "https://fashion-set-go-website.netlify.app/",
    },

    {
      title: "Chat App",
      description: " React and Node Chat App",
      imgUrl: project2,
      link: "https://buzzchatapp.onrender.com", // Replace "#" with the actual link for the Chat App
    },

    {
      title: "Landing Page",
      description: "HTML&CSS Landing Page ",
      imgUrl: project3,
      link: "https://precious-raindrop-e02bd5.netlify.app/",
    },

    {
      title: "Tic-Tac-Toe Game",
      description: " HTML, CSS & JavaScript Tic-Tac-Toe Game ",
      imgUrl: project4,
      link: "https://admirable-scone-7b46e6.netlify.app/",
    },
    {
      title: "Calculator",
      description: "HTML,CSS & JavaScript Calculator ",
      imgUrl: project5,
      link: "https://calcu-styling.netlify.app",
    },
    {
      title: "Banking App",
      description: "Python Banking App ",
      imgUrl: project6,
      link: "https://drive.google.com/file/d/1Nt4_uxPuTmvjGM05V0ZWExsymyenGX1K/view?usp=drive_link",
      // link: "https://github.com/DBAnthony-12/Banking-App",
    },
    {
      title: "Library Managment System",
      description: "Java Library Managment System ",
      imgUrl: project7,
      link: "https://github.com/McengwaAyanda/Library-Management-System-java",
    },
  ];

  const educationDetails = [
    "High School: Matriculated in 2020 at JG Meiring High School.",
    "College: Studied at Rosebank College, completed a Diploma in Software Development.",
    "CapaCiti: Completed a 6 month course at CapaCiti.",
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Welcome to my projects I have created.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" className="nav-link-custom">
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="nav-link-custom">
                    Skills
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="nav-link-custom">
                    Education
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <LanguagesSection />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {educationDetails.map((detail, index) => (
                    <Card key={index} className="education-card">
                      <Card.Body>{detail}</Card.Body>
                    </Card>
                  ))}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorImage} alt="Background" /> */}
    </section>
  );
};

export default Projects;
