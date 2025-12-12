import React, { useEffect, useState } from "react";
import "./Resume.css";

// logos
import huaweiLogo from "../assets/logos/huawei-logo.png";
import icepLogoLight from "../assets/logos/icep-logo-white.png";
import icepLogoDark from "../assets/logos/icep-logo-dark.png";

const getTheme = (): "light" | "dark" => {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
};

const Resume: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "data-theme") {
          setTheme(getTheme());
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const icepLogo = theme === "light" ? icepLogoDark : icepLogoLight;

  useEffect(() => {
    document.title = "Experience | Yin";
  }, []);

  return (
    <div className="resume">
      <h2>Experience</h2>
      <a
        className="experience-link"
        href="https://www.huawei.com/en/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Huawei Website"
      >
        <div className="experience-item">
          <div className="experience-header">
            <div className="experience-logo-and-name">
              <img src={huaweiLogo} alt="Huawei" className="experience-logo" />
              <h3 className="company-name glow-text">Huawei Technologies</h3>
            </div>
            <span className="duration">Nov 2025 - Present</span>
          </div>
          <div className="job-title">Systems Engineer Intern</div>
          <div className="job-description"></div>
        </div>
      </a>
      <div className="experience-separator"></div>
      <a
        className="experience-link"
        href="https://icep.co.za/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open ICEP website"
      >
        <div className="experience-item">
          <div className="experience-header">
            <div className="experience-logo-and-name">
              <img src={icepLogo} alt="ICEP" className="experience-logo" />
              <h3 className="company-name glow-text">ICEP</h3>
            </div>
            <span className="duration">Mar 2025 - Sept 2025</span>
          </div>
          <div className="job-title">Backend Developer Intern</div>
          <div className="job-description">
            Worked as a backend developer on a team that built a reporting
            system for my former university, allowing lecturers to submit weekly
            reports. Developed the backend using .NET and SQL Server, and was
            also responsible for deploying & monitoring the backend.
          </div>
        </div>
      </a>
    </div>
  );
};

export default Resume;
