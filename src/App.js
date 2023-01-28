import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import Signup from "./components/Signup/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import User from "./components/User/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route exact path="/user/*" element={<User />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
