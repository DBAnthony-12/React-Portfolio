import React from "react";
import { Col, Card } from "react-bootstrap";
import './Projects.css'; // Ensure this path is correct

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        {/* Anchor tag wrapping the card */}
        <Card className="project-card">
          <div className="card-image-container">
            <Card.Img variant="top" src={imgUrl} className="card-image" />
            <div className="card-overlay">
              <div className="overlay-text">{description}</div>
            </div>
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};
