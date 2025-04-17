"use client";

import { useState } from "react";
import { GitHubRepo } from "../../types";
import RepositoryCard from "../card/RepositoryCard";
import RepositoryDetail from "../Repository/RepositoryDetail";
import PrimaryButton from "../button/PrimaryBtn";
import { FaUsers } from 'react-icons/fa';
import "./profileView.css"
import UserList from "../userList/UserList";

interface Props {
  user: {
    avatar_url: string | null;
    login: string;
    name: string;
    bio: string | null;
    followers: number;
    following: number;
    public_repos: number;
  };
  repos: GitHubRepo[];
  followersList: any[];
  followingList: any[];
  onFollowersClick: () => void;
}

export default function UserProfileView({ user, repos,followersList,followingList, onFollowersClick }: Props) {
  console.log(followersList ,"d")
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [showList, setShowList] = useState<"followers" | "following" | null>(null);


  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
  };

  const handleBack = () => {
    setSelectedRepo(null);
  };
  const handleShowList = (type: "followers" | "following") => {
    setShowList(type);
  };

  const handleBackFromList = () => {
    setShowList(null);
  };


  if (!user || !repos) return <p>Loading...</p>;

  return (
    <div className="user-page">
      {showList ? (
        <UserList
          users={showList === "followers" ? followersList : followingList}
          onBack={handleBackFromList}
        />
      ) : !selectedRepo ? (
        <>
          <div className="profile">
            <div className="left-panel">
              <img src={user.avatar} alt="Avatar" className="avatar" />
              <h2 className="username">{user.login}</h2>
              <PrimaryButton
                text="View"
                onClick={() => window.open(`https://github.com/${user.login}`, "_blank")}
                styleProps={{
                  backgroundColor: "#f0f0f0",
                  color: "#000",
                }}
              />
            </div>
            <div className="right-panel">
              <p className="user-handle">@{user.name}</p>
              <p className="user-bio">{user.bio}</p>
              <div className="user-Connections">
                <p className="connection-count" onClick={() => handleShowList("followers")}>
                  <FaUsers size={16} color="gray" /> {user.followers} <span className="connection-text">followers</span>
                </p>
                <p className="connection-count" onClick={() => handleShowList("following")}>
                  <FaUsers size={16} color="gray" /> {user.following} <span className="connection-text">following</span>
                </p>
              </div>
            </div>
          </div>

          <h3 className="repo-title">Repositories { user?.public_repos > 0 ? `(${user.public_repos})` : '' } </h3>
          <div className="repo-list">
            {repos.map((repo) => (
              <RepositoryCard
                key={repo.id}
                repo={repo}
                onClick={() => handleRepoClick(repo)}
              />
            ))}
          </div>
        </>
      ) : (
        <RepositoryDetail repo={selectedRepo} onBack={handleBack} />
      )}

    </div>
  );
};
