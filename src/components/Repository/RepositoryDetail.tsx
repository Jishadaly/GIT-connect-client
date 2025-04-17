import React from "react";
import { GitHubRepo } from "../../types/index";
import "./respositoryDetails.css"

interface Props {
  repo: GitHubRepo;
  onBack: () => void;
}

export default function RepositoryDetail({ repo, onBack }: Props) {
  return (
    <div className="repo-detail-container">
      <button onClick={onBack} className="back-btn">← Back</button>
      <h2 className="repo-name">{repo.name}</h2>
      <p className="repo-description">{repo.description || "No description provided."}</p>
      
      <div className="repo-stats">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>🐛 Issues: {repo.open_issues_count}</span>
        <span>📄 Language: {repo.language || "Unknown"}</span>
        <span>{repo.private ? "🔒 Private" : "🌐 Public"}</span>
        <span>{repo.fork ? "🍴 Forked Repo" : "📦 Original Repo"}</span>
        <span>🧪 Has Issues: {repo.has_issues ? "Yes" : "No"}</span>
        <span>📁 Default Branch: {repo.default_branch}</span>
      </div>

      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="visit-btn">
        Visit on GitHub ↗
      </a>
    </div>
  );
}
