import "./TechStack.css";
import { useEffect, useState } from "react";

import javaLogo from "../assets/logos/java_logo.png";
import kotlinLogo from "../assets/logos/kotlin_logo.png";
import jsLogo from "../assets/logos/js_logo.png";
import tsLogo from "../assets/logos/ts_logo.png";
import nodeLogo from "../assets/logos/nodejs_logo.png";
import springLogo from "../assets/logos/springboot_logo.png";
import mysqlLogo from "../assets/logos/mysql_logo.png";
import mssqlLogo from "../assets/logos/mssql_logo.png";
import reactLogo from "../assets/logos/react_logo.png";
import csharpLogo from "../assets/logos/csharp_logo.png";
import netCoreLogo from "../assets/logos/netcore_logo.svg.png";
import docketLogo from "../assets/logos/docker_logo.webp";
import githubLogoWhite from "../assets/logos/github_icon.webp";
import githubLogoBlack from "../assets/logos/github_logo_black.png";

const languageTechStack = [
  { name: "Java", logo: javaLogo },
  { name: "C#", logo: csharpLogo },
  { name: "Kotlin", logo: kotlinLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "TypeScript", logo: tsLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "SQL Server", logo: mssqlLogo },
];

const getTheme = (): "light" | "dark" => {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
};

const TechStack = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "data-theme") {
          setTheme(getTheme());
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const githubLogo = theme === "light" ? githubLogoBlack : githubLogoWhite;

  const techStack = [
    { name: "Node.js", logo: nodeLogo },
    { name: "Spring Boot", logo: springLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "React", logo: reactLogo },
    { name: ".NET Core", logo: netCoreLogo },
    { name: "Docker", logo: docketLogo },
  ];

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
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <span className="tech-tooltip">{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="language-tech-stack-slider">
        {duplicatedLanguageTechStack.map((tech, index) => (
          <div key={index} className="tech-item">
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <span className="tech-tooltip">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
