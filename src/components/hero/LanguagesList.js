import "../../css/hero/language-list.css";

function LanguagesList() {
    return (
        <div className="language-wrapper">
            <img className="language-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="java"/>
            <img className="language-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"/>
            <img className="language-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3"/>
            <img className="language-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="spring"/>
            <img className="language-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react"/>
        </div>
    )
}

export default LanguagesList;