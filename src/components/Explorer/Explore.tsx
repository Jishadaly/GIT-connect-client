import React, { useState, useEffect } from "react"
import "./ExploreUsers.css"

const SAMPLE_USERS = [
  { id: 1, login: "octocat", avatar_url: "https://github.com/octocat.png", type: "User" },
  { id: 2, login: "facebook", avatar_url: "https://github.com/facebook.png", type: "Organization" },
  { id: 3, login: "google", avatar_url: "https://github.com/google.png", type: "Organization" },
  { id: 4, login: "microsoft", avatar_url: "https://github.com/microsoft.png", type: "Organization" },
  { id: 5, login: "vercel", avatar_url: "https://github.com/vercel.png", type: "Organization" },
  { id: 6, login: "tailwindlabs", avatar_url: "https://github.com/tailwindlabs.png", type: "Organization" },
]

const Explore = ({ onDeleteUser }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setUsers(SAMPLE_USERS)
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return <div className="loading">Loading users...</div>
  }

  return (
    <div className="explore-users">
      <h2 className="explore-title">Explore GitHub Users</h2>

      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={user.avatar_url || "/placeholder.svg"}
              alt={`${user.login}'s avatar`}
              className="user-avatar"
            />
            <div className="user-info">
              <h3 className="user-login">{user.login}</h3>
              <p className="user-type">{user.type}</p>
            </div>
            <button className="delete-button" onClick={() => onDeleteUser(user)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore
