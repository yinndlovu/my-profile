import React, { useEffect } from "react";
import "./Projects.css";
import content from "../data/content";

interface ProjectsProps {
  goBack: () => void;
  goToProjectOneDetails: () => void;
  goToProjectTwoDetails: () => void;
}

const Projects: React.FC<ProjectsProps> = ({
  goToProjectOneDetails,
  goToProjectTwoDetails,
}) => {
  useEffect(() => {
    document.title = "Projects | Yin";
  }, []);

  const projects = [
    {
      id: 1,
      title: "Lecturers Report System",
      descriptionHtml: content.projectOneDescription,
      githubUrl: null as string | null,
      onDetails: goToProjectOneDetails,
    },
    {
      id: 2,
      title: "Pinky Promises",
      descriptionHtml: content.projectTwoDescription,
      githubUrl: "https://github.com/yinndlovu/pinky-promises",
      onDetails: goToProjectTwoDetails,
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="my-projects-title">Projects</h2>

      <div className="projects-list">
        {projects.map((p, idx) => (
          <div key={p.id} className="project-card">
            <div className="project-left">
              <h3 className="project-title">
                {idx + 1}. {p.title}
              </h3>
              <div
                className="project-desc"
                dangerouslySetInnerHTML={{ __html: p.descriptionHtml }}
              />
            </div>

            <div className="project-right">
              <div className="project-actions-top">
                {p.githubUrl ? (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-github"
                    title="Open GitHub repository"
                  >
                    GitHub
                  </a>
                ) : (
                  <span
                    className="btn btn-github disabled"
                    aria-disabled="true"
                    title="Repository unavailable"
                  >
                    GitHub
                  </span>
                )}
              </div>

              <div className="project-actions-bottom">
                <button
                  onClick={p.onDetails}
                  className="btn btn-details"
                  title="View project details"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mini-projects-section">
        <h3>
          I also have some smaller projects which can all be found on my{" "}
          <a
            href="https://github.com/yinndlovu"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </h3>
      </div>
    </div>
  );
};

export default Projects;
