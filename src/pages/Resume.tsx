import React from "react";
import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>

      <div className="experience-item">
        <div className="experience-header">
          <h3 className="company-name glow-text">Went Initiatives</h3>
          <span className="duration">June 2023 - April 2024</span>
        </div>
        <div className="job-title">Backend Developer Intern</div>
        <div className="job-description">
          Developed automation services for Meta platforms to auto-publish posts
          from REST APIs, and created custom Discord bots for gaming, server
          management, and moderation using Java.
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3 className="company-name glow-text">ICEP</h3>
          <span className="duration">March 2025 - Present</span>
        </div>
        <div className="job-title">Software Developer Intern</div>
        <div className="job-description">
          Took on multiple roles including Full-stack/Back-end Dev, DevOps Engineer on
          multiple projects we worked on to build systems such as a reporting
          system for lecturers using tools like .NET, React, EF, and Node.js.
        </div>
      </div>
    </div>
  );
};

export default Resume;
