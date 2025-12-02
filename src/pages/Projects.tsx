import React, { useEffect } from "react";
import "./Projects.css";
import content from "../data/content";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = "Portfolio | Yin";
  }, []);

  const projects = [
    {
      id: 1,
      title: "Lecturers Report System",
      descriptionHtml: content.projectOneDescription,
      githubUrl: null as string | null,
      detailsPath: "/portfolio/lecturers-report-system",
      isOngoing: false,
      googlePlayUrl: null as string | null,
      appStoreUrl: null as string | null,
    },
    {
      id: 2,
      title: "Pinky Promises",
      descriptionHtml: content.projectTwoDescription,
      githubUrl: "https://github.com/yinndlovu/pinky-promises",
      detailsPath: "/portfolio/pinky-promises",
      isOngoing: false,
      googlePlayUrl: null as string | null,
      appStoreUrl: null as string | null,
    },
    {
      id: 3,
      title: "LFC Mobile App",
      descriptionHtml: "",
      githubUrl: null as string | null,
      detailsPath: null as string | null,
      isOngoing: true,
      googlePlayUrl: null as string | null,
      appStoreUrl: null as string | null,
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="my-projects-title">Projects</h2>

      <div className="projects-list">
        {projects.map((p, idx) => (
          <div key={p.id} className="project-card">
            {p.isOngoing && (
              <div className="ongoing-badge">Ongoing</div>
            )}
            <div className="project-left">
              <h3 className="project-title">
                {idx + 1}. {p.title}
              </h3>
              {p.descriptionHtml && (
                <div
                  className="project-desc"
                  dangerouslySetInnerHTML={{ __html: p.descriptionHtml }}
                />
              )}
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

              <div className="project-actions-middle">
                {p.googlePlayUrl ? (
                  <a
                    href={p.googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-store"
                    title="Download on Google Play"
                  >
                    Google Play
                  </a>
                ) : (
                  <span
                    className="btn btn-store disabled"
                    aria-disabled="true"
                    title="Not available on Google Play"
                  >
                    Google Play
                  </span>
                )}
                {p.appStoreUrl ? (
                  <a
                    href={p.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-store"
                    title="Download on App Store"
                  >
                    App Store
                  </a>
                ) : (
                  <span
                    className="btn btn-store disabled"
                    aria-disabled="true"
                    title="Not available on App Store"
                  >
                    App Store
                  </span>
                )}
              </div>

              <div className="project-actions-bottom">
                {p.detailsPath ? (
                  <Link
                    to={p.detailsPath}
                    className="btn btn-details"
                    title="View project details"
                  >
                    Details
                  </Link>
                ) : (
                  <span
                    className="btn btn-details disabled"
                    aria-disabled="true"
                    title="Details unavailable"
                  >
                    Details
                  </span>
                )}
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
