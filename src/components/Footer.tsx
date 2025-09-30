import "./Footer.css";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import siteLogo from "../assets/logos/site_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={siteLogo} alt="Yin Logo" className="footer-logo" />

        <h3>where to find yin</h3>
        <div className="social-links">
          <a
            href="https://github.com/yinndlovu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yinhlandlovu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>

        <a href="mailto:starboy@yinn.dev" className="contact-link">
          yin@yinn.dev
        </a>
      </div>

      <p className="footer-rights">
        © {new Date().getFullYear()} Yin | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
