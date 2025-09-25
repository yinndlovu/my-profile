import React, { useState, useEffect } from "react";
import "./ProjectOne.css";
import ScreenshotOne from "../../assets/project-one/screenshot-1.png";
import ScreenshotTwo from "../../assets/project-one/screenshot-2.png";
import ScreenshotThree from "../../assets/project-one/screenshot-3.png";
import ScreenshotFour from "../../assets/project-one/screenshot-4.png";
import content from "../../data/projects/projectOneContent";
import ReactLogo from "../../assets/logos/react_logo.png";
import NetCoreLogo from "../../assets/logos/netcore_logo.svg.png";
import MsSqlLogo from "../../assets/logos/mssql_logo.png";
import AwsLogo from "../../assets/logos/Amazon_Web_Services_Logo.svg.png";

const techStack = [
  {
    name: "React.js",
    icon: ReactLogo,
    usage: "Frontend framework",
  },
  {
    name: "C# (ASP.NET Core)",
    icon: NetCoreLogo,
    usage: "Backend API",
  },
  {
    name: "Microsoft SQL Server DB",
    icon: MsSqlLogo,
    usage: "Database",
  },
  {
    name: "AWS",
    icon: AwsLogo,
    usage: "Deployment",
  },
];

const ProjectOne: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Lecturers Report System | Yin";
  }, []);

  return (
    <div className="project-one-details">
      <h2 className="glow-text">TUT Reports Hub</h2>
      <h3 className="project-one-subtitle">
        A digital solution for creating and managing lecturer weekly reports
      </h3>
      <p>Some screenshots of the UI of this web application</p>
      <div className="project-one-images">
        <img src={ScreenshotOne} alt="Screenshot 1" />
        <img src={ScreenshotTwo} alt="Screenshot 2" />
        <img src={ScreenshotThree} alt="Screenshot 3" />
        <img src={ScreenshotFour} alt="Screenshot 4" />
      </div>
      <section className="project-one-section">
        <h4>Idea behind creating the project</h4>
        <p dangerouslySetInnerHTML={{ __html: content.projectIdea }}></p>
      </section>
      <section className="project-one-section">
        <h4>Key features</h4>
        <ul>
          <li>Easy report creation and editing</li>
          <li>Automated calculations and summaries</li>
          <li>Secure login for lecturers and admins</li>
          <li>Export reports as PDF</li>
          <li>Responsive, ease-to-use design for every user</li>
          <li>Import multiple users at once with supported files</li>
          <li>Channel for seekly support and providing feedbacks</li>
        </ul>
      </section>
      <section className="project-one-section">
        <h4>Technologies used</h4>
        <div className="tech-icons-row">
          {techStack.map((tech, idx) => (
            <div
              key={tech.name}
              className={`tech-icon-container${
                selected === idx ? " selected" : ""
              }`}
              onClick={() => setSelected(idx)}
            >
              {selected === idx && (
                <div className="tech-usage">{tech.usage}</div>
              )}
              <img
                src={tech.icon}
                alt={tech.name}
                className="tech-icon"
                style={{
                  width: selected === idx ? 70 : 50,
                  height: selected === idx ? 70 : 50,
                  transition: "all 0.2s",
                }}
              />
            </div>
          ))}
        </div>
        <div className="tech-icons-prompt">Click an icon</div>
      </section>
      <section className="project-one-section">
        <h4>My role in the project</h4>
        <p dangerouslySetInnerHTML={{ __html: content.myRole }}></p>
      </section>
    </div>
  );
};

export default ProjectOne;
