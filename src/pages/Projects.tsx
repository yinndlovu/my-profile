import React, { useEffect } from "react";
import "./Projects.css";
import content from "../data/content";

interface ProjectsProps {
  goBack: () => void;
  goToProjectOneDetails: () => void;
  goToProjectTwoDetails: () => void;
}

const Projects: React.FC<ProjectsProps> = ({
  goBack,
  goToProjectOneDetails,
  goToProjectTwoDetails,
}) => {
  useEffect(() => {
    document.title = "Projects | Yin";
  }, []);

  return (
    <div className="projects-container">
      <h2 className="my-projects-title">Projects</h2>
      <div className="project-title-row">
        <p className="project-title">1. Lecturers Report System</p>
        <button
          onClick={goToProjectOneDetails}
          title="View project details"
          className="project-title-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 3h7m0 0v7m0-7L10 14m-4 0v7h7"
            />
          </svg>
        </button>
      </div>
      <br></br>
      <p
        className="project-desc"
        dangerouslySetInnerHTML={{ __html: content.projectOneDescription }}
      ></p>

      <div className="project-title-row">
        <p className="project-title">2. Pinky Promises</p>
        <button
          onClick={goToProjectTwoDetails}
          title="View project details"
          className="project-title-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 3h7m0 0v7m0-7L10 14m-4 0v7h7"
            />
          </svg>
        </button>
      </div>
      <br></br>
      <p
        className="project-desc"
        dangerouslySetInnerHTML={{ __html: content.projectTwoDescription }}
      ></p>
      <div className="message">
        <p>More of my projects that I happen to create will be added here.</p>
      </div>
      <button onClick={goBack} className="projects-back-button">
        Home
      </button>
    </div>
  );
};

export default Projects;
