import React, { useState, useEffect } from "react";
import "./Login.css";
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.user));

        alert(data.message);

        if (response.ok) {
            navigate("/branch");
        }

    }
    catch(err){
        console.log(err);
        alert("Server Error");
    }
};

  const navigate = useNavigate();

  const goToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>CampusConnect</h1>
        <p className="subtitle">
          Sign in with your IITJ account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="abc@iitj.ac.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="register-text">
          Don't have an account?
          <span id="reg">
            <button onClick={goToRegisterPage}>
                Register
            </button>
          </span>
        </p>
      </div>
    </div>
  );
}