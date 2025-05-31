import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ProjectCard(props) {
    return (
        <div className="col-md-3">
            <Card className="h-100 shadow">
                <Card.Img variant="top" src={props.projectImage} />
                <Card.Body className="p-5">
                    <Card.Title className="fw-bold text-uppercase mb-4 fs-3">{props.projectName}</Card.Title>
                    <Button className="shadow text-capitalize" variant="outline-primary" onClick="ViewProject()">View Project</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard;
