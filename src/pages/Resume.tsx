import React from "react";
import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <p>All of my experience so far</p>
      <ul>
        <li>
          <strong>Enormity of LFC</strong>
          <ul>
            <li className="responsibility">
              Software Engineer, Business Analyst, Creator
            </li>
            <li className="period">May 2022 - Present</li>
          </ul>
        </li>
        <li>
          <strong>Went Initiatives</strong>
          <ul>
            <li className="responsibility">Backend Developer Intern</li>
            <li className="period">June 2023 - April 2024</li>
          </ul>
        </li>
        <li>
          <strong>ICEP</strong>
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
