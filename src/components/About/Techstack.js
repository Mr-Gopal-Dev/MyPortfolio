import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import {
  SiMicrosoftsqlserver,
  SiDotnet,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React JS">
        <DiReact title="React JS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node JS">
        <DiNodejs title="Node JS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDb">
        <DiMongodb title="MongoDb" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Asp.Net">
        <SiDotnet title="Asp.Net" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML">
        <SiHtml5 title="HTML" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <SiCss3 title="CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <SiBootstrap title="Bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MSSQL">
        <SiMicrosoftsqlserver title="MSSQL" />
      </Col>
    </Row>
  );
};

export default Techstack;
