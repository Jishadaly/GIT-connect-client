// components/UserList.tsx
import { useNavigate } from "react-router-dom";
import { useSearchUser } from "../../Hooks/api/useSearchUser";
import { useAppDispatch } from "../../Hooks/useStore";
import { setCurrentUser, setError } from "../../redux/slices/userSlice";
import { GitHubUser, UserGitData } from "../../types";
import "./userList.css";
import { useState } from "react";
import Loader from "../loader/Loader";

interface UserListProps {
  users:GitHubUser[];
  onBack: () => void;
}

export default function UserList({ users, onBack }: UserListProps) {
  const dispatch = useAppDispatch();
  // const isLoading = useAppSelector((state) => state.user.isLoading);
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)

  const { mutate: searchUserMutate } = useSearchUser();

  const handleUserClick = (username: string) => {
    if (!username.trim()) return;
  
    setLoading(true)
  
    searchUserMutate(username.trim(), {
      onSuccess: (response: {data:UserGitData}) => {
        console.log(response, "User Git Data");
        dispatch(setCurrentUser(response.data)); // Assuming you store user data
        setLoading(false)

        navigate(`/`);
      },
      onError: () => {
        dispatch(setError("User not found or API error."));
        setLoading(false)

      },
    });
  };
  
if(loading) return <Loader message="user is laoding...."/>

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
                src={user.avatar_url ?? user.avatar_url}
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
