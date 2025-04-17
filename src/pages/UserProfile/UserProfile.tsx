import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import UserProfileView from "../../components/profileView/ProfileView"; // your design component
import Loader from "../../components/loader/Loader";
import "./userProfile.css"

const UserProfile = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const error = useSelector((state: RootState) => state.user.error);
  const navigate = useNavigate();

  if(isLoading) return <Loader message="user feching"/>

console.log(currentUser , "fffffffffff")

  if (error) {
    return (
      <div style={{ padding: "2rem", color: "red" }}>
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="no-user">
        <p>No user found. Please search again.</p>
      </div>
    );
  }
  console.log(currentUser,"ff")

  return (
        <div style={{ padding: "2rem" }}>
        <UserProfileView
            user={currentUser.user}
            repos={currentUser.repos}
            followersList={currentUser.followersList}
            followingList={currentUser.followersList}
            onFollowersClick={() => {
            // implement followers modal/view if needed
            console.log("Followers clicked");
            }}
        />
        </div>
  );
};

export default UserProfile;
