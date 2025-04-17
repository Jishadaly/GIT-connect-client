// components/UserList.tsx
import "./userList.css"

interface UserListProps {
  users: {
    id: number;
    login: string;
    avatar_url: string;
  }[];
  onBack: () => void;
}

export default function UserList({ users, onBack }: UserListProps) {
  return (
    <div className="followers-list">
      <div className="followers-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Profile
        </button>
        <h2 className="followers-title">Users ({users.length})</h2>
      </div>
      {users.length === 0 ? (
        <p className="no-followers">No users found</p>
      ) : (
        <div className="followers-grid">
          {users.map((user) => (
            <div key={user.id} className="follower-card">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="follower-avatar"
              />
              <div className="follower-info">
                <h3 className="follower-login">{user.login}</h3>
                <a
                  href={`https://github.com/${user.login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="follower-link"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}