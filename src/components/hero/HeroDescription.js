import "../../css/hero/hero-description.css";

function HeroDescription() {
    return (
        <div className="description-wrapper">
            <div className="hero-row">
                <div className="hero-name">Ty O'Neal</div>
                <div className="hero-content">
                    <span>What I Prioritize as a Dev:</span>
                    <ul className="value-list">
                        <li>User Value</li>
                        <br />
                        <li>Code That Works</li>
                        <li>Neat Code</li>
                        <li>Good Turnover</li>
                    </ul>
                    <p>Hi there</p>
                </div>
            </div>
        </div>
    )
}

export default HeroDescription;