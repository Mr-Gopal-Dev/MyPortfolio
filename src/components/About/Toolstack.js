import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import {
  SiPostman,
  SiJira,
  SiDocker,
  SiSonarqube,
  SiVisualstudiocode,
  SiVisualstudio,
  SiMicrosoftsqlserver,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <SiVisualstudio title="Visual Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode title="Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MSSQL">
        <SiMicrosoftsqlserver title="MSSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <FaGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SonarQube">
        <SiSonarqube title="SonarQube" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jira">
        <SiJira title="Jira" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker title="Docker" />
      </Col>
    </Row>
  );
};

export default Toolstack;
