import React, { useEffect } from "react";
import "./Education.css";

const Education: React.FC = () => {
  useEffect(() => {
    document.title = "Education | Yin";
  }, []);

  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-item">
        <div className="education-header">
          <h3 className="institution glow-text">
            Tshwane University of Technology
          </h3>
          <span className="period">2021 - 2025</span>
        </div>
        <div className="course">
          Computer Science{" "}
          <span
            className="
        course-status"
          >
            - Completed
          </span>
        </div>
        <div className="course-details">
          Focused largely on back-end development with Java and SQL databases,
          writing reusable code, applying object-oriented programming, and
          building scalable systems. Data structures & algorithms were also
          covered in depth.
          <br></br>
          <br></br>
          Also explored mobile development in Kotlin, web fundamentals (HTML,
          CSS, JS), dynamic web pages, and basic cloud computing.
        </div>
      </div>
    </div>
  );
};

export default Education;
