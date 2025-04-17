// components/UserList.tsx
import { useNavigate } from "react-router-dom";
import { useSearchUser } from "../../Hooks/api/useSearchUser";
import { useAppDispatch, useAppSelector } from "../../Hooks/useStore";
import { setCurrentUser, setError, setLoading } from "../../redux/slices/userSlice";
import { UserGitData } from "../../types";
import "./userList.css";

interface UserListProps {
  users: {
    id: number;
    login: string;
    avatar_url: string;
  }[];
  onBack: () => void;
}

export default function UserList({ users, onBack }: UserListProps) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const navigate = useNavigate();

  const { mutate: searchUserMutate } = useSearchUser();

  const handleUserClick = (username: string) => {
    if (!username.trim()) return;
  
    // dispatch(setLoading(true));
  
    searchUserMutate(username.trim(), {
      onSuccess: (response) => {
        dispatch(setCurrentUser(response));
      },
      onError: () => {
        dispatch(setError("User not found or API error."));
      },
      onSettled: () => {
        dispatch(setLoading(false));
        navigate("/"); // Safe to navigate after state update
      },
    });
  };
  


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
            <div
              key={user.id}
              className="follower-card"
              onClick={() => handleUserClick(user.login)}
            >
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="follower-avatar"
              />
              <div className="follower-info">
                <h3 className="follower-login">{user.login}</h3>
                <p className="follower-link">View Profile</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
