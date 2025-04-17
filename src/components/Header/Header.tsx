import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchUser } from "../../Hooks/api/useSearchUser";
import { setCurrentUser, setLoading, setError } from "../../redux/slices/userSlice";
import {   UserGitData } from "../../types/index";
import { useAppDispatch, useAppSelector } from "../../Hooks/useStore";
import "./header.css";
import { FiSearch } from "react-icons/fi"; // for search icon
import Loader from "../loader/Loader";

const Header: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const { mutate } = useSearchUser();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
  
    dispatch(setLoading(true));
    mutate(username.trim(), {
      onSuccess: (response: {data:UserGitData}) => {
        console.log(response, "User Git Data");
        dispatch(setCurrentUser(response.data)); // Assuming you store user data
        dispatch(setLoading(false));
        navigate(`/`);
      },
      onError: () => {
        dispatch(setError("User not found or API error."));
        dispatch(setLoading(false));
      },
    });
  };
  
  


if (isLoading) return <Loader/>

  return (
    <header className="header">
     
      <img src="https://img.icons8.com/?size=50&id=62856&format=png&color=000000" alt="GitHub" className="logo" />

      
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button" onClick={handleSubmit}>
          <FiSearch size={18} />
        </button>
      </form>
      <button className="explore-button" onClick={() => navigate("/explore")}>
        Explore
      </button>
    </header>
  );
};

export default Header;
