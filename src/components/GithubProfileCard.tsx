import { useEffect, useState } from "react";
import "./GithubProfileCard.css";
import { fetchContributions } from "../services/fetchContribution";

type GithubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
};

const GithubProfileCard = ({ username }: { username: string }) => {
  const [data, setData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [contrib, setContrib] = useState<number | null>(null);
  const [contribErr, setContribErr] = useState<string | null>(null);

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

  useEffect(() => {
    let ignore = false;
    const token = (import.meta as any)?.env?.VITE_GITHUB_TOKEN as
      | string
      | undefined;
    if (!token) {
      setContribErr(null);
      setContrib(null);
      return;
    }
    setContribErr(null);
    setContrib(null);
    fetchContributions(username, token)
      .then((count) => {
        if (!ignore) setContrib(count);
      })
      .catch((e: any) => {
        if (!ignore)
          setContribErr(e?.message || "Failed to load contributions");
      });
    return () => {
      ignore = true;
    };
  }, [username]);

  return (
    <section className="gh-card" aria-label="GitHub profile">
      <div className="gh-card-header">
        <h2>GitHub</h2>
        {data?.html_url && (
          <a
            className="gh-btn"
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title="Open GitHub profile"
          >
            View Profile
          </a>
        )}
      </div>

      {loading ? (
        <div className="gh-skeleton">Loading profile…</div>
      ) : err ? (
        <div className="gh-error">Could not load GitHub profile. {err}</div>
      ) : data ? (
        <div className="gh-body">
          <img
            src={data.avatar_url}
            alt={`${data.login} avatar`}
            className="gh-avatar"
          />
          <div className="gh-info">
            <div className="gh-name-row">
              <span className="gh-name">{data.name || data.login}</span>
              {data.name && <span className="gh-login">@{data.login}</span>}
            </div>
            {data.bio && <p className="gh-bio">{data.bio}</p>}
            <div className="gh-stats">
              <span>
                <strong>{data.public_repos}</strong> repositories
              </span>
              {contrib !== null && (
                <span
                  className="gh-contrib"
                  title="Total contributions in the last year"
                >
                  {contrib} contributions
                </span>
              )}
              {contribErr && (
                <span
                  className="gh-contrib gh-contrib-muted"
                  title={contribErr}
                >
                  contributions unavailable
                </span>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default GithubProfileCard;
