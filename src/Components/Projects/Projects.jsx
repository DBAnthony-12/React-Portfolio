import React from "react";
import "./Projects.css";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"; // Ensure this path is correct
import project1 from "../../assets/project1.png";
import project2 from "../../assets/BuzzChatApp.png";
import project3 from "../../assets/LandingPage.png";
import project4 from "../../assets/Tic-Tac-Toe.png";
import Card from 'react-bootstrap/Card';
import LanguagesSection from "./LanguagesSection";



export const Projects = () => {
  const projects = [
    {
      title: "Website",
      description: "Fashion Set Go Project",
      imgUrl: project1,
      link: "https://fashion-set-go.netlify.app/"
    },

    {
      title: "Chat App",
      description: "Chat App",
      imgUrl: project2,
      link: "https://buzzchatapp.onrender.com" // Replace "#" with the actual link for the Chat App
    },

    {
      title: "Landing Page",
      description: "Landing Page ",
      imgUrl: project3,
      link: "https://precious-raindrop-e02bd5.netlify.app/"
    },

    {
      title: "Tic-Tac-Toe Game",
      description: "Tic-Tac-Toe Game ",
      imgUrl: project4,
      link: "verdant-sundae-e291a8.netlify.app" 
    },

  ];

  const educationDetails = [
    "Went to JG Meiring High School.",
    "Studied at Rosebank College, completed my Diploma in Software Development.",
    "CapaCiti: Completing a 6 month course."
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
                  <Nav.Link eventKey="first" className="nav-link-custom">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="nav-link-custom">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="nav-link-custom">Education</Nav.Link>
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
                    <LanguagesSection/>
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
