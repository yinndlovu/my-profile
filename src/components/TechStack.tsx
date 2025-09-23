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

  return (
    <div className="tech-stack">
      <div className="tech-stack-slider">
        {duplicatedTechStack.map((tech, index) => (
          <div key={index} className="tech-item">
            <img
              src={tech.logo}
              alt={tech.name}
              className="tech-logo"
            />
          </div>
        ))}
      </div>
      <div className="language-tech-stack-slider">
        {duplicatedLanguageTechStack.map((tech, index) => (
          <div key={index} className="tech-item">
            <img
              src={tech.logo}
              alt={tech.name}
              className="tech-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
