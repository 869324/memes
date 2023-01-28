import "./User.css";

import { useEffect } from "react";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import MemeList from "../MemeList/MemeList";
import Nav from "../NavBar/Navbar";
import RandomMeme from "../RandomMeme/RandomMeme";
import RandomMemes from "../RandomMemes/RandomMemes";

function User() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user || !Object.keys(user).length) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Nav />

      <div className="pages">
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/randomMemes" element={<RandomMemes />} />
        </Routes>
      </div>
    </div>
  );
}

export default User;
