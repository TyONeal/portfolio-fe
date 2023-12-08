import { useState } from "react";

import Navbar from "./components/navigation/Navbar";
import HeroWrapper from "./components/hero/HeroWrapper";
import ProjectWrapper from "./components/projects/ProjectWrapper";

import "./css/layout.css";
import "./css/resets.css";

function App() {
    return (
        <div className="page-wrapper">

            <HeroWrapper />
            <ProjectWrapper />
        </div>
    )
}

export default App;