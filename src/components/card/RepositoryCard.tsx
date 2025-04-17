import React from 'react'
import { GitHubRepo } from '../../types'
import './repositoryCard.css'

interface Props {
  repo: GitHubRepo
  onClick?: () => void
}

export default function RepositoryCard({ repo, onClick }: Props) {
  return (
    <div className="repo-card" onClick={onClick}>
      <div className="repo-header">
        <p rel="noopener noreferrer" className="repo-name">
          {repo.name}
        </p>
        {repo.fork && <span className="repo-badge">Forked</span>}
        {repo.archived && <span className="repo-badge archived">Archived</span>}
      </div>

      <p className="repo-desc">{repo.description ?? 'No description provided.'}</p>

      <div className="repo-info">
        <span><strong>Language:</strong> {repo.language}</span>
        <span><strong>Stars:</strong> {repo.stargazers_count}</span>
        <span><strong>Forks:</strong> {repo.forks_count}</span>
        <span><strong>Issues:</strong> {repo.open_issues_count}</span>
      </div>

      <div className="repo-footer">
        <span>Default Branch: {repo.default_branch}</span>
        <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </div>
  )
}
