import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function TitleLink({ isHightLight, title, link }) {
    if (!link) {
        return (
            <div
                className={`text-primaryBase ${isHightLight ? "text-primaryTitle" : ""}`}
            >
                {title}
            </div>
        );
    }

    return (
        <div
            className={`text-primaryBase ${isHightLight ? "text-primaryTitle" : ""}`}
        >
            <a href={link}>
                {title}
                <FontAwesomeIcon
                    className={`text-xs -rotate-45 duration-500 ease-in-out ${isHightLight ? "translate-x-1 -translate-y-2" : ""}`}
                    icon={faArrowRight} />
            </a>
        </div>
    );
}

export default TitleLink;
