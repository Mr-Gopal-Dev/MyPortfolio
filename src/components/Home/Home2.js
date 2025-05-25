import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", borderBottom: "1px solid" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <div className="mt-4 fs-18" style={{ textAlign: "justify" }}>
              <ul>
                <li>
                  I am a <strong>Software Developer</strong> with over{" "}
                  <strong>3.5 years</strong> of professional experience.
                </li>
                <li>
                  My expertise includes working with technologies such as{" "}
                  <span className="purple">
                    React, Node.js, MongoDB, ASP.NET C#, Web API, SQL
                  </span>
                  , and the <span className="purple">MVC</span> architectural
                  pattern.
                </li>
                <li>
                  I specialize in building <strong>scalable</strong>,{" "}
                  <strong>secure</strong>, and{" "}
                  <strong>performance-driven web applications</strong> and APIs.
                </li>
                <li>
                  I am passionate about writing <strong>clean</strong> and
                  <strong> maintainable code</strong> to deliver meaningful user
                  experiences.
                </li>
                <li>
                  I am currently expanding my knowledge in:
                  <ul>
                    <li>
                      <span className="purple">Next.js</span>
                    </li>
                    <li>
                      <span className="purple">Solid.js</span>
                    </li>
                    <li>
                      Integrating{" "}
                      <span className="purple">AI and Micro services </span>
                      with <span className="purple">React</span> and{" "}
                      <span className="purple">Node.js</span> applications.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:gopal.thecoder@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gopal-samy-42966822/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home2;
