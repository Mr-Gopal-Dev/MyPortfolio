import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="text-start">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:gopal.thecoder@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/gopal-samy-42966822/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="6" className="text-end fs-13">
          <h3>
            &copy; {new Date().getFullYear()} Gopal Samy. All Rights Reserved.
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
