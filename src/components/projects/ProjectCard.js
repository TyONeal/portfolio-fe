import "../../css/projects/projects.css";

function ProjectCard(proj) {
    return (
        <div className="card">
            <div className="card-header">
                Header
            </div>
            <div className="card-description">
                Description
            </div>
            <div className="card-image">
                <img src={proj.image} alt="project" />
            </div>
        </div>
    )
}

export default ProjectCard;