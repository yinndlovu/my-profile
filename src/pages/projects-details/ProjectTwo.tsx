import React, { useState, useEffect } from "react";
import "./ProjectTwo.css";
import ScreenshotOne from "../../assets/project-two/screenshot-1.png";
import ScreenshotTwo from "../../assets/project-two/screenshot-2.png";
import ScreenshotThree from "../../assets/project-two/screenshot-3.png";
import ScreenshotFour from "../../assets/project-two/screenshot-4.png";
import ScreenshotFive from "../../assets/project-two/screenshot-5.png";
import ScreenshotSix from "../../assets/project-two/screenshot-6.png";
import content from "../../data/projects/projectTwoContent";
import ReactLogo from "../../assets/logos/react_logo.png";
import nodeJsLogo from "../../assets/logos/logo_nodejs.png";
import mySqlLogo from "../../assets/logos/mysql_logo.png";

const techStack = [
  {
    name: "React Native",
    icon: ReactLogo,
    usage: "React Native (frontend)",
  },
  {
    name: "Node.js",
    icon: nodeJsLogo,
    usage: "Backend",
  },
  {
    name: "MySQL",
    icon: mySqlLogo,
    usage: "Database",
  },
];

const ProjectTwo: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Resume | Yin";
  }, []);

  return (
    <div className="project-two-details">
      <h2 className="glow-text">Pinky Promises</h2>
      <h3 className="project-two-subtitle">
        A cute couples app to keep memories, play games, and stay connected
      </h3>
      <p>Some screenshots of the UI of the Pinky Promises app</p>
      <div className="project-two-images">
        <img src={ScreenshotOne} alt="Screenshot 1" />
        <img src={ScreenshotTwo} alt="Screenshot 2" />
        <img src={ScreenshotThree} alt="Screenshot 3" />
        <img src={ScreenshotFour} alt="Screenshot 4" />
        <img src={ScreenshotFive} alt="Screenshot 5" />
        <img src={ScreenshotSix} alt="Screenshot 6" />
      </div>
      <section className="project-two-section">
        <h4>Idea behind creating the project</h4>
        <p dangerouslySetInnerHTML={{ __html: content.projectIdea }}></p>
      </section>
      <section className="project-two-section">
        <h4>Key features</h4>
        <ul>
          <li>Do cute stuff with your partner</li>
          <li>Share a space for milestones and memories</li>
          <li>Stay connected with your partner's daily activities</li>
          <li>Play couples' trivia and mini games together</li>
          <li>Keep track of relationship timelines</li>
          <li>Chat with an AI buddy who remembers your inside jokes</li>
          <li>Use cool (optional) location features</li>
        </ul>
      </section>
      <section className="project-two-section">
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
      <section className="project-two-section">
        <h4>What I did</h4>
        <p dangerouslySetInnerHTML={{ __html: content.myRole }}></p>
      </section>
    </div>
  );
};

export default ProjectTwo;
