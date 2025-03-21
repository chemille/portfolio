import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './footer.css';

export default function Footer() {

    return (
        <footer className="footer" class="mt-auto">
            <div className="social-icons">
                <a href="/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faHouse} />
                </a>
                <a href="https://www.github.com/chemille" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/michelle-o-64a64645" ><FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:ohmotrl@gmail.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </footer>
    );
};