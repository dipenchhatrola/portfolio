import React from "react";
import { motion } from "framer-motion";
import ProjectItems from "../assets/ProjectItems";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
    return (
        <motion.div
            className="py-5" 
            id="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <motion.h2 
                    className="mb-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    My projects
                </motion.h2>
                <div className="row g-4">
                    {
                        ProjectItems.map((project, index) => (
                            <ProjectCard 
                                key={project.id} 
                                projectImage={project.projectImg} 
                                projectName={project.projectTitle}
                                projectLink={project.link}
                            />
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectSection;