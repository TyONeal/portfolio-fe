import ProjectCard from "./ProjectCard";

function ProjectWrapper({proj}) {
    return (
        <div>
            <ProjectCard project={proj} />
            <ProjectCard project={proj} />
            <ProjectCard project={proj} />
        </div>
    )
}

export default ProjectWrapper;