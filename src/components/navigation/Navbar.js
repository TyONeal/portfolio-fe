import "../../css/navbar.css"

function Navbar() {
    return (
        <nav className="nav-container">
            <ul>
                <li><a href="/projects" target="_blank" rel="noopener">Projects</a></li>
                <li><a href="/aboutMe" target="_blank" rel="noopener">About Me</a></li>
                <li><a href="https://github.com/TyONeal" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/ty-oneal/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;