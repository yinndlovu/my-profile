import React from "react";
import "./ProjectTwoDetails.css";
import ScreenshotOne from "../../assets/project-two/screenshot-1.png";
import ScreenshotTwo from "../../assets/project-two/screenshot-2.png";
import ScreenshotThree from "../../assets/project-two/screenshot-3.png";
import ScreenshotFour from "../../assets/project-two/screenshot-4.png";
import content from "../../data/projects/projectTwoContent";

interface ProjectTwoDetailsProps {
  goBack: () => void;
}

const ProjectTwoDetails: React.FC<ProjectTwoDetailsProps> = ({ goBack }) => {
  return (
    <div className="project-two-details">
      <h2 className="glow-text">Lecturers Report System</h2>
      <h3 className="subtitle">A digital solution for creating and managing lecturer weekly reports</h3>
      <p>Some screenshots of the UI of this web application</p>
      <div className="project-two-images">
        <img src={ScreenshotOne} alt="Screenshot 1" />
        <img src={ScreenshotTwo} alt="Screenshot 2" />
        <img src={ScreenshotThree} alt="Screenshot 3" />
        <img src={ScreenshotFour} alt="Screenshot 4" />
      </div>
      <section className="project-two-section">
        <h4>Idea creating the project</h4>
        <p
          dangerouslySetInnerHTML={{ __html: content.projectIdea }}
        ></p>
      </section>
      <section className="project-two-section">
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
      <section className="project-two-section">
        <h4>Technologies used</h4>
        <ul>
          <li>React.js</li>
          <li>C# (ASP.NET Core)</li>
          <li>Microsoft SQL Server DB</li>
          <li>AWS for deployment</li>
        </ul>
      </section>
      <section className="project-two-section">
        <h4>My role in the project</h4>
        <p
          dangerouslySetInnerHTML={{ __html: content.myRole }}
        >
        </p>
      </section>
      <button className="project-two-back-button" onClick={goBack}>Back to Projects</button>
    </div>
  );
};

export default ProjectTwoDetails; 