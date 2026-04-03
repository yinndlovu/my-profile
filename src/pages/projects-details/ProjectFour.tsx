import React, { useState, useEffect } from "react";
import "./ProjectFour.css";
import ScreenshotOne from "../../assets/project-four/Screenshot-1.png";
import ScreenshotTwo from "../../assets/project-four/Screenshot-2.png";
import ScreenshotThree from "../../assets/project-four/Screenshot-3.png";
import ScreenshotFour from "../../assets/project-four/Screenshot-4.png";
import Screenshot from "../../assets/project-four/full-time.png";
import content from "../../data/projects/ProjectFourContent";
import KonvaLogo from "../../assets/logos/konva_js_logo.png";
import ReactLogo from "../../assets/logos/react_logo.png";
import NetCoreLogo from "../../assets/logos/netcore_logo.svg.png";
import PostgreLogo from "../../assets/logos/postgresql_logo.svg.png";

const techStack = [
  {
    name: "React.js",
    icon: ReactLogo,
    usage: "Frontend framework",
  },
  {
    name: "Konva.js",
    icon: KonvaLogo,
    usage: "2D Canvas framework",
  },
  {
    name: "Node.js with Express",
    icon: NetCoreLogo,
    usage: "Backend API",
  },
  {
    name: "PostgreSQL",
    icon: PostgreLogo,
    usage: "Database",
  },
];

const ProjectFour: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Graphics Studio | Yin";
  }, []);

  return (
    <div className="project-four-details">
      <h2 className="glow-text">Graphics Studio</h2>
      <h3 className="project-four-subtitle">
        A lightweight web application for creating and editing football
        graphics.
      </h3>
      <p>Some screenshots of the UI of this web application</p>
      <div className="project-four-images">
        <img src={ScreenshotOne} alt="Screenshot 1" />
        <img src={ScreenshotTwo} alt="Screenshot 2" />
        <img src={ScreenshotThree} alt="Screenshot 3" />
        <img src={ScreenshotFour} alt="Screenshot 4" />
        <img src={Screenshot} alt="Full time screenshot" />
      </div>
      <section className="project-four-section">
        <h4>Idea behind creating the project</h4>
        <p dangerouslySetInnerHTML={{ __html: content.projectIdea }}></p>
      </section>
      <section className="project-four-section">
        <h4>Key features</h4>
        <ul>
          <li>Easy graphic creation and editing</li>
          <li>Export graphics as images</li>
          <li>Customizable templates for different types of graphics</li>
          <li>Auto-save work and continue where you left off</li>
          <li>All imported images are saved for re-use</li>
          <li>Local saves for fast access</li>
        </ul>
      </section>
      <section className="project-four-section">
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
      <section className="project-four-section">
        <h4>My role in the project</h4>
        <p dangerouslySetInnerHTML={{ __html: content.myRole }}></p>
      </section>
    </div>
  );
};

export default ProjectFour;
