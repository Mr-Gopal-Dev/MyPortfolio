import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
// import Type from "./Type";

const content =
  "Accomplished Full Stack Developer with 3.5 years of hands-on experience designing and implementing scalable web applications and robust back-end systems, leveraging expertise in front-end technologies (HTML, CSS, Bootstrap, JavaScript, TypeScript, JQuery, React), back-end frameworks (ASP.NET/C#, Node.js), and database management (MongoDB, MSSQL). Adept at delivering clean, maintainable code within MVC architecture, collaborating effectively in agile teams, and utilizing modern development tools such as GitHub, JIRA, and CI/CD pipelines to drive project success.";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello Eveyone!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> GOPAL SAMY</strong>
              </h1>

              <div className="p-50 fs-18 text-start">
                {/* <Type /> */}
                {content}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
};

export default Home;
