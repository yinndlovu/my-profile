import { useState, useEffect } from "react";
import "./styles.css";
import TechStack from "./components/TechStack";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import content from "./data/content";
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume";
import Education from "./pages/Education";
import ProjectOne from "./pages/projects-details/ProjectOne";
import ProjectTwo from "./pages/projects-details/ProjectTwo";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [pageVisible, setPageVisible] = useState(true);
  const [pendingPage, setPendingPage] = useState<string | null>(null);

  useEffect(() => {
    if (currentPage === "home") {
      document.title = "Main page | Yin";
    } else if (currentPage === "projects") {
      document.title = "Projects | Yin";
    } else if (currentPage === "resume") {
      document.title = "Resume | Yin";
    } else if (currentPage === "education") {
      document.title = "Education | Yin";
    }
  }, [currentPage]);

  const handleSetCurrentPage = (page: string) => {
    if (page === currentPage) return;
    setPageVisible(false);
    setPendingPage(page);
  };

  useEffect(() => {
    if (!pageVisible && pendingPage) {
      const timer = setTimeout(() => {
        setCurrentPage(pendingPage);
        setPageVisible(true);
        setPendingPage(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pageVisible, pendingPage]);

  return (
    <>
      <div className="app-container">
        <Navbar
          setCurrentPage={handleSetCurrentPage}
          currentPage={currentPage}
        />
        <div className={`fade-page${pageVisible ? " visible" : ""}`}>
          {currentPage === "home" ? (
            <>
              <h1 className="main-title">Yinhla Ndlovu</h1>
              <p className="subtitle">
                Software Engineer | Full‑stack Developer
              </p>

              {(() => {
                const parts = content.aboutMeText.split("<br></br>");
                const para1 = (parts[0] || "").trim();
                const para2 = (parts[1] || "").trim();
                const para3 = (parts[2] || "").trim();
                return (
                  <div className="about-card">
                    <div className="about-col">
                      <p dangerouslySetInnerHTML={{ __html: para1 }}></p>
                    </div>
                    <div className="about-col">
                      <p dangerouslySetInnerHTML={{ __html: para2 }}></p>
                    </div>
                    <div className="about-col">
                      <p dangerouslySetInnerHTML={{ __html: para3 }}></p>
                    </div>
                  </div>
                );
              })()}

              <div className="tech-stack-card">
                <div className="tech-stack">
                  <TechStack />
                </div>
              </div>

              <br></br>
              <p className="prompt">
                See the{" "}
                <span
                  className="projects-link"
                  onClick={() => handleSetCurrentPage("projects")}
                >
                  projects
                </span>
                &nbsp;that I have worked on using some of these tools.
              </p>
              <div id="contact-section">
                <ContactForm inline />
              </div>
            </>
          ) : currentPage === "projects" ? (
            <Projects
              goBack={() => handleSetCurrentPage("home")}
              goToProjectOneDetails={() =>
                handleSetCurrentPage("projectOneDetails")
              }
              goToProjectTwoDetails={() =>
                handleSetCurrentPage("projectTwoDetails")
              }
            />
          ) : currentPage === "resume" ? (
            <Resume />
          ) : currentPage === "education" ? (
            <Education />
          ) : currentPage === "projectOneDetails" ? (
            <ProjectOne goBack={() => handleSetCurrentPage("projects")} />
          ) : currentPage === "projectTwoDetails" ? (
            <ProjectTwo goBack={() => handleSetCurrentPage("projects")} />
          ) : null}
        </div>
      </div>
      <Footer
        onContactClick={() => {
          if (currentPage !== "home") {
            handleSetCurrentPage("home");
            setTimeout(() => {
              document
                .getElementById("contact-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 350);
          } else {
            document
              .getElementById("contact-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </>
  );
};

export default App;
