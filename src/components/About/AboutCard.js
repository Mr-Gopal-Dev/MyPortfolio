import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "justify" }}>
            <p>
              Hello! I’m <span className="purple">GOPAL SAMY</span>, a dedicated
              and results-driven Software Developer from Tamil Nadu, India, with
              over <span className="purple">3.5 years</span> of professional
              experience in{" "}
              <span className="purple">full-stack web development</span>.
            </p>
            <ul>
              <li>
                My core strength lies in developing <strong>robust</strong>,{" "}
                <strong>scalable</strong>, and{" "}
                <strong>user-centric applications</strong> using modern web
                technologies.
              </li>
              <li>
                Currently working at{" "}
                <strong>Sankara Software Services Pvt. Ltd. (Chennai)</strong>,
                contributing to the design and development of enterprise-level
                applications.
              </li>
              <li>
                <strong>
                  <span className="purple">Frontend</span> Development:
                </strong>
                <ul>
                  <li>
                    Creating responsive and dynamic user interfaces using{" "}
                    <span className="purple">
                      React, JavaScript, HTML, CSS, Bootstrap, Jquery,
                      TypeScript, Tailwind CSS and Material UI
                    </span>
                    .
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <span className="purple">Backend</span> Development:
                </strong>
                <ul>
                  <li>
                    Building scalable server-side applications using{" "}
                    <span className="purple">Node.js</span> and{" "}
                    <span className="purple">ASP.NET MVC</span>, focusing on
                    performance and security.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to create it!"
          </p>
          <footer className="blockquote-footer">Peter Drucker</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
