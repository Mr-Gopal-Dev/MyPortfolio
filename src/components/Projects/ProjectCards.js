import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="mb-4">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", height: "60%" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> Live Link
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
