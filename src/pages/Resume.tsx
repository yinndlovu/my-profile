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
          <div className="job-title">Back-End Developer Intern</div>
          <div className="job-description">
            Worked as a back-end developer on a team that built a reporting
            system for my former university, allowing lecturers to submit weekly
            reports. Developed the backend using .NET and SQL Server, and was also responsible for
            deploying & monitoring the backend.
          </div>
        </div>
      </a>
      <a
        className="experience-link"
        href="https://www.altron.com/customer-success-stories/netstar-and-blink-logic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open ICEP website"
      >
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="company-name glow-text">Blink Logic</h3>
            <span className="duration">Nov 2025 - Present</span>
          </div>
          <div className="job-title">Software Engineer Intern</div>
          <div className="job-description">
            
          </div>
        </div>
      </a>
    </div>
  );
};

export default Resume;
