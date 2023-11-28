import "../../css/navbar.css"

function Navbar() {
    return (
        <nav className="nav-container">
            <ul>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/aboutMe">About Me</a></li>
                <li><a href="https://github.com/TyONeal">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/ty-oneal/">LinkedIn</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;