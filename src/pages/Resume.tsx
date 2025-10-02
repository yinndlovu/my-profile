import React, { useEffect } from "react";
import "./Resume.css";

const Resume: React.FC = () => {
  useEffect(() => {
    document.title = "Experience | Yin";
  }, []);

  return (
    <div className="resume">
      <h2>Experience</h2>
      <a
        className="experience-link"
        href="https://icep.co.za/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open ICEP website"
      >
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="company-name glow-text">ICEP</h3>
            <span className="duration">Mar 2025 - Sept 2025</span>
          </div>
          <div className="job-title">Software Developer Intern</div>
          <div className="job-description">
            Took on multiple roles including Full-stack/Back-end Dev, DevOps
            Engineer on multiple projects we worked on to build systems such as
            a reporting system for lecturers using tools like .NET, React, EF,
            and Node.js.
          </div>
        </div>
      </a>
    </div>
  );
};

export default Resume;
