import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";

export default function Signup(props) {
  let navigate = useNavigate();

  const [signupData, setSignupData] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    setUsers(storedUsers ? storedUsers : []);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      swal({
        icon: "error",
        text: "Your passwords do not match!",
      });
    } else {
      const userExists = users.find((u) => u.email === signupData.email);
      if (userExists) {
        swal({
          icon: "error",
          text: "User with this email alredy exists!",
        });
      } else {
        localStorage.setItem("users", JSON.stringify([...users, signupData]));
        navigate("/login");
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Signup</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name"> </label>

        <input
          onChange={handleInputChange}
          name="name"
          id="name"
          type="text"
          placeholder="Full Name"
          required
        />

        <label htmlFor="email"> </label>

        <input
          onChange={handleInputChange}
          type="email"
          placeholder="your email address"
          id="email"
          name="email"
          required
        />

        <label htmlFor="password"> </label>

        <input
          onChange={handleInputChange}
          type="password"
          placeholder="your password"
          id="password"
          name="password"
          required
        />

        <input
          onChange={handleInputChange}
          type="password"
          placeholder="confirm password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />

        <button> Signup </button>
      </form>

      <button className="link-btn" onClick={() => navigate("/login")}>
        Already have an account? Login
      </button>
    </div>
  );
}
