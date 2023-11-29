import ProjectCard from "./ProjectCard";

import "../../css/projects/projects.css";

function ProjectWrapper({proj}) {
    return (
        <div className="project-wrapper">
            <div className="project-header">
                My Projects
            </div>
            <div className="cards-wrapper">
                <ProjectCard project={proj} />
                <ProjectCard project={proj} />
                <ProjectCard project={proj} />
            </div>
        </div>
    )
}

export default ProjectWrapper;