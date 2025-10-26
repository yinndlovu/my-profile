import "./TechStack.css";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

// logos
import javaLogo from "../assets/logos/logo_java_v2.png";
import kotlinLogo from "../assets/logos/kotlin_logo.png";
import jsLogo from "../assets/logos/js_logo.png";
import tsLogo from "../assets/logos/ts_logo.png";
import nodeLogo from "../assets/logos/logo_nodejs.png";
import springLogo from "../assets/logos/springboot_logo.png";
import mysqlLogo from "../assets/logos/logo_mysql.png";
import mssqlLogo from "../assets/logos/mssql_logo.png";
import reactLogo from "../assets/logos/react_logo.png";
import csharpLogo from "../assets/logos/csharp_logo.png";
import netCoreLogo from "../assets/logos/netcore_logo.svg.png";
import docketLogo from "../assets/logos/docker_logo.webp";
import githubLogoWhite from "../assets/logos/github_icon.webp";
import githubLogoBlack from "../assets/logos/github_logo_black.png";
import awsLogo from "../assets/logos/Amazon_Web_Services_Logo.svg.png";
import expressBlackLogo from "../assets/logos/express-logo.svg";
import expressWhiteLogo from "../assets/logos/express-logo-white.png";
import vercelBlackLogo from "../assets/logos/vercel-logo-black.svg";
import vercelWhiteLogo from "../assets/logos/vercel-logo-white.png";
import googleCloudLogo from "../assets/logos/google-cloud-logo.png";
import renderLogo from "../assets/logos/render-logo.jpeg";
import azureLogo from "../assets/logos/azure-logo.png";

const getTheme = (): "light" | "dark" => {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
};

const TechStack = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());
  const [hoveredTech, setHoveredTech] = useState<{
    name: string;
    description: string;
    x: number;
    y: number;
  } | null>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

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
  const vercelLogo = theme === "light" ? vercelBlackLogo : vercelWhiteLogo;
  const expressLogo = theme === "light" ? expressBlackLogo : expressWhiteLogo;

  const handleMouseEnter = (
    tech: { name: string; description: string },
    event: React.MouseEvent
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredTech({
      name: tech.name,
      description: tech.description,
      x: rect.left + rect.width / 2,
      y: rect.top - rect.height - 15,
    });
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  const techStack = [
    {
      name: "MySQL",
      logo: mysqlLogo,
      description:
        "MySQL is a relational database I mainly use to manage structured data for my apps.",
    },
    {
      name: "SQL Server",
      logo: mssqlLogo,
      description:
        "SQL Server is a relational database I use to manage structured data in my apps. " +
        "It's my preferred choice for .NET projects.",
    },
    {
      name: "GitHub",
      logo: githubLogo,
      description:
        "GitHub is essential for collaboration and version control. It's what I use for all my projects.",
    },
    {
      name: "Docker",
      logo: docketLogo,
      description:
        "Docker helps me containerize applications, which simplifies testing and deployment.",
    },
    {
      name: "AWS",
      logo: awsLogo,
      description:
        "AWS is great, it has everything you could need. Though there are other cloud " +
        "platforms I prefer, AWS offers a ton of opportunities to explore and learn new tools, which I like.",
    },
    {
      name: "Azure",
      logo: azureLogo,
      description:
        "Azure is the best cloud platform for Microsoft tech. I don't look anywhere else for " +
        "hosting and managing .NET applications and SQL Server databases.",
    },
    {
      name: "Google Cloud",
      logo: googleCloudLogo,
      description:
        "Google Cloud is where I've spent the most time when building mobile apps. " +
        "It provides excellent free-tier APIs and services, especially tailored for Android development.",
    },
    {
      name: "Vercel",
      logo: vercelLogo,
      description:
        "Vercel is my go-to for hosting React web applications. " +
        "It's great, I don't use anything else for my React projects.",
    },
    {
      name: "Render",
      logo: renderLogo,
      description:
        "Render is my preferred platform for hosting Node.js backends and smaller personal projects. " +
        "It's not only easy, but reliable too.",
    },
  ];

  const languageTechStack = [
    {
      name: "Java",
      logo: javaLogo,
      description:
        "Java is the first language I ever learned and my go-to when I want to solve complex problems in the backend" +
        " or write really complex logic.",
    },
    {
      name: "C#",
      logo: csharpLogo,
      description: "I mainly use C# when I am building .NET applications.",
    },
    {
      name: "Kotlin",
      logo: kotlinLogo,
      description: "Kotlin is my go-to for writing Android native code.",
    },
    {
      name: "JavaScript",
      logo: jsLogo,
      description:
        "JavaScript is the language I use for adding interactivity to web pages " +
        "and building dynamic web applications.",
    },
    {
      name: "TypeScript",
      logo: tsLogo,
      description:
        "TypeScript helps me make my JavaScript code more reliable and easier to maintain.",
    },
    {
      name: "Express.js",
      logo: expressLogo,
      description:
        "Express.js is my preferred framework for building Node.js REST APIs. " +
        "I usually use it for small to medium-sized applications.",
    },
    {
      name: "Node.js",
      logo: nodeLogo,
      description: "Node.js is my main JavaScript runtime for most projects.",
    },
    {
      name: "Spring Boot",
      logo: springLogo,
      description:
        "Java being the first language I learned, starting with Spring Boot for a framework felt natural." +
        " It's great, but there are other back-end frameworks I like better.",
    },
    {
      name: "React",
      logo: reactLogo,
      description:
        "React is the framework I mainly use for web development, and React Native for mobile development.",
    },
    {
      name: ".NET Core",
      logo: netCoreLogo,
      description:
        ".NET is my favorite back-end framework for building REST APIs in large applications." +
        " Coming from Spring Boot, I appreciate how much it simplifies things and how easy it is to learn.",
    },
  ];

  const duplicationFactor = 10;
  const duplicatedTechStack = Array(duplicationFactor).fill(techStack).flat();
  const duplicatedLanguageTechStack = Array(duplicationFactor)
    .fill(languageTechStack)
    .flat();

  return (
    <>
      <div className="tech-stack" ref={techStackRef}>
        <div className="tech-stack-slider">
          {duplicatedTechStack.map((tech, index) => (
            <div
              key={index}
              className="tech-item"
              onMouseEnter={(e) => handleMouseEnter(tech, e)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
            </div>
          ))}
        </div>
        <div className="language-tech-stack-slider">
          {duplicatedLanguageTechStack.map((tech, index) => (
            <div
              key={index}
              className="tech-item"
              onMouseEnter={(e) => handleMouseEnter(tech, e)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
            </div>
          ))}
        </div>
      </div>
      {hoveredTech &&
        createPortal(
          <div
            className="tech-tooltip-portal"
            style={{
              position: "fixed",
              left: hoveredTech.x,
              top: hoveredTech.y,
              transform: "translateX(-50%)",
              zIndex: 1000,
            }}
          >
            {hoveredTech.description}
          </div>,
          document.body
        )}
    </>
  );
};

export default TechStack;
