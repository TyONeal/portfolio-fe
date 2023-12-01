import "../../css/hero/hero-description.css";

function HeroDescription() {
    return (
        <div className="description-wrapper">
            <div className="hero-row">
                <div className="hero-name">Ty O'Neal</div>
                <div className="hero-content">
                    <div className="hero-content-header">
                       <span>What I Prioritize as a Dev:</span>
                    </div>
                    <div className="hero-content-list">
                        <ul className="value-list">
                            <li>User Value</li>
                            <li>Code That Works</li>
                            <li>Neat Code</li>
                            <li>Good Turnover</li>
                        </ul>
                    </div>
                    <div className="hero-content-mission">
                        <p>
                            Programming is, at its best, gray. Context should always be considered when building applications. Personally, I always lean on the side of UX first. We are creating technologies to assist (perhaps even delight) our customers. Before I ship code out, the first thing I'm looking at is: <i>does this code provide a service or convenience to my user-base?</i> If it doesn't, I tend to re-evaluate. That doesn't mean I write messy code. It just means at the top level, I'm here to build products for people to use.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroDescription;