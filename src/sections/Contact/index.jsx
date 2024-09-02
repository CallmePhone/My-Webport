import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="mt-9">
      <div className="flex items-end gap-4 text-2xl">
        <a
          href="https://github.com/CallmePhone"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <FontAwesomeIcon
            className="hover:scale-125 hover:text-primaryTitle transition-all"
            icon={faGithub}
            
          />
        </a>

        <a
          href="https://www.facebook.com/pphichanan.srirattanapat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Facebook profile"
        >
          <FontAwesomeIcon
            className="hover:scale-125 hover:text-primaryTitle transition-all"
            icon={faFacebook}
            
          />
        </a>

        <a
          href="https://www.linkedin.com/in/phichanan-srirattanapat-04b828325/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <FontAwesomeIcon
            className="hover:scale-125 hover:text-primaryTitle transition-all"
            icon={faLinkedin}
            
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
