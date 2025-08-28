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
  const [showContactForm, setShowContactForm] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [pendingPage, setPendingPage] = useState<string | null>(null);
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

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
    <div className="app-container">
      <Navbar setCurrentPage={handleSetCurrentPage} currentPage={currentPage} />
      <div className={`fade-page${pageVisible ? " visible" : ""}`}>
        {currentPage === "home" ? (
          <>
            <h1 className="main-title">Yinhla Ndlovu</h1>
            <h2 className="about-me-title">About Me</h2>
            <p
              className="intro-text"
              dangerouslySetInnerHTML={{ __html: content.aboutMeText }}
            ></p>

            <div className="tech-stack">
              <TechStack />
            </div>
            <p
              className="tech-stack-explanation"
              dangerouslySetInnerHTML={{ __html: content.techStackExplanation }}
            ></p>
            <br></br>
            <p className="prompt">
              See the {" "}
              <span
                className="projects-link"
                onClick={() => handleSetCurrentPage("projects")}
              >
                projects
              </span>
              &nbsp;that I have worked on using some of these tools.
            </p>
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
      {showContactForm && <ContactForm onClose={toggleContactForm} />}
      <Footer onContactClick={toggleContactForm} />
    </div>
  );
};

export default App;
