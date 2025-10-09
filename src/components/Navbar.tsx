import "./Navbar.css";
import siteLogo from "../assets/logos/site_logo.png";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const items = [
    { to: "/", label: "Home" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/experience", label: "Experience" },
    { to: "/education", label: "Education" },
  ];

  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <div className={`nav-backdrop${scrolled ? " show" : ""}`} />

      <nav className={`navbar-inline${scrolled ? " scrolled" : ""}`}>
        <Link to="/">
          <img src={siteLogo} alt="Site logo" className="nav-logo" />
        </Link>
        <ul className="nav-buttons">
          {items.map((it) => (
            <li key={it.to}>
              <NavLink
                to={it.to}
                className={({ isActive }) =>
                  `nav-btn${isActive ? " active" : ""}`
                }
              >
                {it.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`theme-toggle${scrolled ? " hidden" : ""}`}
        onClick={toggleTheme}
        aria-label="Toggle light/dark mode"
        title="Toggle theme"
      >
        {theme === "dark" ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zm10.48 14.32l1.79 1.79 1.79-1.79-1.79-1.8-1.79 1.8zM12 4V1h0v3zm0 19v-3h0v3zM4 12H1v0h3zm19 0h-3v0h3zM6.76 19.16l-1.8 1.79-1.79-1.79 1.79-1.8 1.8 1.8zM20.83 4.84l-1.79-1.79-1.79 1.79 1.79 1.79 1.79-1.79zM12 7a5 5 0 100 10A5 5 0 0012 7z" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </button>
    </>
  );
};

export default Navbar;
