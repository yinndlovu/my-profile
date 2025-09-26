import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import githubLogoWhite from "../assets/logos/github_icon.webp";
import githubLogoBlack from "../assets/logos/github_logo_black.png";
import "./GithubProfileCard.css";

type GithubUser = {
  login: string;
  public_repos: number;
  html_url: string;
};

const getTheme = (): "light" | "dark" => {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
};

const GithubProfileCard = ({ username }: { username: string }) => {
  const [data, setData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
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

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API error: ${r.status}`);
        return r.json();
      })
      .then((j: GithubUser) => {
        if (!ignore) {
          setData(j);
          setErr(null);
        }
      })
      .catch((e) => {
        if (!ignore) setErr(e.message || "Failed to load profile");
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [username]);

  if (loading) {
    return <div className="gh-skeleton">loading…</div>;
  }

  if (err) {
    return <div className="gh-error">{err}</div>;
  }

  if (!data) {
    return null;
  }

  const githubLogo = theme === "light" ? githubLogoBlack : githubLogoWhite;

  return (
    <div className="gh-card-wrapper">
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="gh-card"
      >
        <div className="gh-left">
          <img src={githubLogo} alt="GitHub" className="gh-icon" />
          <div className="gh-text">
            <span className="gh-username">{data.login}</span>
            <span className="gh-stats">
              <strong>{data.public_repos}</strong> Repositories
            </span>
          </div>
        </div>
        <FiArrowUpRight size={20} className="gh-arrow" />
      </a>
    </div>
  );
};

export default GithubProfileCard;
