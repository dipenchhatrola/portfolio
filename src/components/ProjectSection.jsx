import React from "react";
import ProjectItems from "../assets/ProjectItems";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
    return (
        <div className="py-5" id="projects">
            <div className="container">
                <h2 className="mb-4">My projects</h2>
                <div className="row g-4">
                    {
                        ProjectItems.map((project) => <ProjectCard key={project.id} projectImage={project.projectImg} projectName={project.projectTitle} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;
