import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";

export default function LoginPage(props) {
  let redirect = useNavigate();

  const [users, setUsers] = useState([]);
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    setUsers(storedUsers ? JSON.parse(storedUsers) : []);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate a successful login
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      redirect("/user");
    } else {
      swal({
        icon: "error",
        text: "Invalid credentials",
      });
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email"></label>

        <input
          onChange={handleInputChange}
          type="email"
          placeholder="your email address"
          id="email"
          name="email"
          required
        />

        <label htmlFor="password"></label>

        <input
          onChange={handleInputChange}
          type="password"
          placeholder="your password"
          id="password"
          name="password"
          required
        />

        <button> Login</button>
      </form>
      <button className="link-btn" onClick={() => redirect("/signup")}>
        Don't have an account? Signup
      </button>
    </div>
  );
}
