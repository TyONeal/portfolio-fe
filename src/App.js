import { useState } from "react";

import HeroWrapper from "./components/hero/HeroWrapper";
import Navbar from "./components/navigation/Navbar";

import "./css/layout.css";
import "./css/resets.css";

function App() {
    return (
        <div className="page-wrapper">
            <Navbar />
            <HeroWrapper />
        </div>
    )
}

export default App;