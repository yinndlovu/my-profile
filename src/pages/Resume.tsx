import React from "react";
import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <p>All of my experience so far</p>
      <ul>
        <li>
          <strong className="glow-text">Red Enormity</strong>
          <ul>
            <li className="responsibility">
              Owner (Dev and Creator)
            </li>
            <li className="period">May 2022 - Present</li>
          </ul>
        </li>
        <li>
          <strong className="glow-text">Went Initiatives</strong>
          <ul>
            <li className="responsibility">Backend Developer Intern</li>
            <li className="period">June 2023 - April 2024</li>
          </ul>
        </li>
        <li>
          <strong className="glow-text">ICEP</strong>
          <ul>
            <li className="responsibility">Software Developer Intern</li>
            <li className="period">March 2025 - Present</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Resume;
