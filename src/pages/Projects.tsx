import React, { useEffect } from "react";
import "./Projects.css";
import content from "../data/content";
import { Link } from "react-router-dom";
import { SiGoogleplay, SiAppstore } from "react-icons/si";

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
      isMobileApp: false,
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
      isMobileApp: false,
      googlePlayUrl: null as string | null,
      appStoreUrl: null as string | null,
    },
    {
      id: 3,
      title: "LFC Mobile App",
      descriptionHtml: "Exciting project... In the works.",
      githubUrl: "https://github.com/yinndlovu/project-red",
      detailsPath: null as string | null,
      isOngoing: true,
      isMobileApp: true,
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
            <div className="project-left">
              {p.isOngoing && <div className="ongoing-badge">Ongoing</div>}
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
                    title="Private repository"
                  >
                    GitHub
                  </span>
                )}
              </div>

              <div className="project-actions-bottom">
                {p.isMobileApp && (
                  <div className="store-buttons">
                    {p.googlePlayUrl ? (
                      <a
                        href={p.googlePlayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon btn-store"
                        title="Download on Google Play"
                      >
                        <SiGoogleplay />
                      </a>
                    ) : (
                      <span
                        className="btn-icon btn-store disabled"
                        aria-disabled="true"
                        title="Coming soon"
                      >
                        <SiGoogleplay />
                      </span>
                    )}
                    {p.appStoreUrl ? (
                      <a
                        href={p.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon btn-store"
                        title="Download on App Store"
                      >
                        <SiAppstore />
                      </a>
                    ) : (
                      <span
                        className="btn-icon btn-store disabled"
                        aria-disabled="true"
                        title="Coming soon"
                      >
                        <SiAppstore />
                      </span>
                    )}
                  </div>
                )}

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
                    title="Coming soon"
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
