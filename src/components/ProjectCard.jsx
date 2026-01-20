import React from "react";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ProjectCard(props) {
    return (
        <div className="col-md-3">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
                <Card className="h-100 shadow">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card.Img variant="top" src={props.projectImage} />
                    </motion.div>
                    <Card.Body className="p-5">
                        <motion.h4
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card.Title className="fw-bold text-uppercase mb-4 fs-3">
                                {props.projectName}
                            </Card.Title>
                        </motion.h4>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button className="shadow text-capitalize" variant="outline-primary" href={props.projectLink} disabled={!props.projectLink} target="_blank"> 
                                View Project
                            </Button>
                        </motion.div>
                    </Card.Body>
                </Card>
            </motion.div>
        </div>
    )
}

export default ProjectCard;