import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import oep from "../../Assets/Projects/oep1.jpg";
import craft from "../../Assets/Projects/craft.jpg";
import shop from "../../Assets/Projects/shop.jpg";
import quiz from "../../Assets/Projects/quiz.jpg";
import we2 from "../../Assets/Projects/we2.png";
import face from "../../Assets/Projects/face.jpg";

const oepDesc =
  "This project is a full-featured online examination portal built with React that aims to provide a secure, intelligent, and customizable digital assessment environment. The system integrates real face authentication, AI-based question generation, live proctor monitoring, and custom test setup modules to ensure integrity, adaptability, and scalability of online assessments.";

const craftDesc =
  "CRAFT QUOTE is a web-based Flight Booking and Quotation Management System developed for the aviation industry. It is designed to handle complex B2B Workflows by enabling aviation operators or charter companies to manage quote requests, flight bookings, and associated master data setups efficiently.";

const shopDesc =
  "The Agora Storefront was an E-Commerce-based web initiative, similar to platforms like Amazon and Flipkart, allowing users to browse products, generate quotes, and complete purchases through multiple payment methods including Credit Cards, Purchase Orders, Reward Points, and Gift Certificates.";

const qzDesc =
  "Quick Quiz is a fast, responsive, and user-friendly quiz application designed for casual learning and quick self-assessment. Built with modern web technologies, this app integrates with an open-source trivia API to fetch dynamic and up-to-date quiz content in various categories and difficulty levels.";

const we2Desc =
  "We2 is a web-based platform designed to facilitate instant communication between users through text-based messages. The core objective is to provide a seamless and efficient environment where individuals or groups can exchange messages, share information, and collaborate in real time, regardless of their physical location.";

const faceAuth =
  "Leveraging TensorFlow.js and additional machine learning libraries, the system performs live facial recognition through the user's webcam, enabling secure and seamless identity verification. The solution integrates client-side face detection and server-side validation, ensuring both speed and reliability in authentication processes.";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects </strong> and {""}
          <strong className="purple"> Contributions </strong>
        </h1>
        <p style={{ color: "white" }}>
          Outlined below are several recent projects showcasing my work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oep}
              isBlog={false}
              title="Online Exam Portal"
              description={oepDesc}
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={craft}
              isBlog={false}
              title="Craft Quote"
              description={craftDesc}
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Agora Store"
              description={shopDesc}
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quick Quiz"
              description={qzDesc}
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={we2}
              isBlog={false}
              title="Real-time Chat App (We2)"
              description={we2Desc}
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Real-time Face Authentication"
              description={faceAuth}
              demoLink=""
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
