import React from "react";
import "./Projects.css";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"; // Ensure this path is correct
import project1 from "../../assets/project1.png";
import project2 from "../../assets/BuzzChatApp.png";
import project3 from "../../assets/Bankingapp.png";
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
      title: "Banking App",
      description: "Bank App",
      imgUrl: project3,
      link: "#" // Replace "#" with the actual link for the Banking App
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Welcome to my projects that I have created.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Education</Nav.Link>
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
                <Tab.Pane eventKey="third" style={{ textAlign: "center", fontSize:"24px" }}>
                    Went to JG Meiring High School. <br></br>
                    Studied at Rosebank College, completed my Diploma in Software Development. <br></br>
                    CapaCiti: Completing a 6 month course.
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
