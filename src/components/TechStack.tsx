import "./TechStack.css";

import javaLogo from "../assets/logos/java_logo.png";
import kotlinLogo from "../assets/logos/kotlin_logo.png";
import jsLogo from "../assets/logos/js_logo.png";
import tsLogo from "../assets/logos/ts_logo.png";
import nodeLogo from "../assets/logos/nodejs_logo.png";
import htmlLogo from "../assets/logos/html_logo.png";
import cssLogo from "../assets/logos/css_logo.svg";
import springLogo from "../assets/logos/springboot_logo.png";
import sqlLogo from "../assets/logos/sql_logo.webp";
import mysqlLogo from "../assets/logos/mysql_logo.png";
import gitLogo from "../assets/logos/git_logo.png";
import reactLogo from "../assets/logos/react_logo.png";
import csharpLogo from "../assets/logos/csharp_logo.png";
import netCoreLogo from "../assets/logos/netcore_logo.svg.png";

const techStack = [
  { name: "Node.js", logo: nodeLogo },
  { name: "Spring Boot", logo: springLogo },
  { name: "Git", logo: gitLogo },
  { name: "React", logo: reactLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: ".NET Core", logo: netCoreLogo },
];

const languageTechStack = [
  { name: "Java", logo: javaLogo },
  { name: "Kotlin", logo: kotlinLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "TypeScript", logo: tsLogo },
  { name: "SQL", logo: sqlLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "C#", logo: csharpLogo },
];

const TechStack = () => {
  const duplicationFactor = 10;
  const duplicatedTechStack = Array(duplicationFactor).fill(techStack).flat();
  const duplicatedLanguageTechStack = Array(duplicationFactor)
    .fill(languageTechStack)
    .flat();

  const techDescriptions = {
    "Node.js": "JavaScript runtime for building scalable server-side applications",
    "Spring Boot": "Java framework for creating microservices and web applications",
    "Git": "Version control system for tracking code changes and collaboration",
    "React": "JavaScript library for building interactive user interfaces",
    "HTML": "Markup language for structuring web content",
    "CSS": "Styling language for designing and formatting web pages",
    ".NET Core": "Cross-platform framework for building modern applications",
    "Java": "Object-oriented programming language for enterprise applications",
    "Kotlin": "Modern programming language for Android and server-side development",
    "JavaScript": "Dynamic programming language for web development",
    "TypeScript": "Typed superset of JavaScript for large-scale applications",
    "SQL": "Structured Query Language for database management",
    "MySQL": "Popular open-source relational database management system",
    "C#": "Modern programming language for .NET applications"
  };

  return (
    <div className="tech-stack">
      <div className="tech-stack-slider">
        {duplicatedTechStack.map((tech, index) => (
          <div key={index} className="tech-item" data-tech={tech.name}>
            <img
              src={tech.logo}
              alt={tech.name}
              className="tech-logo"
            />
            <div className="tech-tooltip">
              <div className="tech-tooltip-title">{tech.name}</div>
              <div className="tech-tooltip-description">
                {techDescriptions[tech.name as keyof typeof techDescriptions]}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="language-tech-stack-slider">
        {duplicatedLanguageTechStack.map((tech, index) => (
          <div key={index} className="tech-item" data-tech={tech.name}>
            <img
              src={tech.logo}
              alt={tech.name}
              className="tech-logo"
            />
            <div className="tech-tooltip">
              <div className="tech-tooltip-title">{tech.name}</div>
              <div className="tech-tooltip-description">
                {techDescriptions[tech.name as keyof typeof techDescriptions]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
