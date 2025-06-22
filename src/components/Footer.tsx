import './Footer.css';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = ({ onContactClick }: { onContactClick: () => void }) => {

    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Where to find Yin</h3>
                <div className="social-links">
                    <a href="https://github.com/yinndlovu" 
                        target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://discordapp.com/users/1296419884363943936/" 
                        target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/yinhlandlovu" 
                        target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                </div>
                <p>
                    Or&nbsp;
                    <span className="contact-link" onClick={onContactClick}>
                        Contact Me
                    </span>
                    &nbsp;directly
                </p>
            </div>
            <p className="footer-rights">© {new Date().getFullYear()} Yin | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
