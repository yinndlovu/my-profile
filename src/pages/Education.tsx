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
        <div className="course">Computer Science</div>
      </div>
      <div className="education-item">
        <div className="education-header">
          <h3 className="institution glow-text">University of Venda</h3>
          <span className="period">2020 - 2020</span>
        </div>
        <div className="course">Mining and Environmental Geology</div>
      </div>
    </div>
  );
};

export default Education;
