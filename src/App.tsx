import { useEffect } from "react";
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
import GithubProfileCard from "./components/GithubProfileCard";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

const Home = () => {
  useEffect(() => {
    document.title = "Main page | Yin";
  }, []);

  const parts = content.aboutMeText.split("<br></br>");
  const para1 = (parts[0] || "").trim();
  const para2 = (parts[1] || "").trim();
  const para3 = (parts[2] || "").trim();

  return (
    <>
      <h1 className="main-title">Yinhla Ndlovu</h1>
      <p className="subtitle">Software Engineer | Back-end Developer</p>

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

      <div className="tech-stack-card">
        <div className="tech-stack">
          <TechStack />
        </div>
      </div>

      <GithubProfileCard username="yinndlovu" />

      <div id="contact-section">
        <ContactForm inline />
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <ScrollToTop />
        <div className="fade-page visible">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/lecturers-report-system"
              element={<ProjectOne />}
            />
            <Route path="/projects/pinky-promises" element={<ProjectTwo />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/education" element={<Education />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
