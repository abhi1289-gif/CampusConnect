import React, { useState } from "react";
import "./Login.css";
import {useNavigate} from 'react-router-dom'


export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [studentId, setStudentId] = useState("");

  const passwordMatch = confirmPassword === "" || password === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordMatch) return;

    try {

      const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          studentId,
          password,
        }),
      });

      const data = await response.json();

      alert(data.message);

    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>CampusConnect</h1>

        <p className="subtitle">
          Create your IITJ Account
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Student ID</label>

              <input
                  type="text"
                  placeholder="B23CS001"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
              />
          </div>

          <div className="input-group">
            <label>IITJ Email</label>

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

          <div className="input-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={!passwordMatch ? "error-input" : ""}
              required
            />

            {!passwordMatch && (
              <small className="error-text">
                Passwords do not match
              </small>
            )}
          </div>

          <button
            type="submit"
            className="login-btn"
            disabled={!passwordMatch}
          >
            Register
          </button>
        </form>

        <p className="register-text">
          Already have an account? 
          <span id="reg">
            <button onClick={goToLoginPage}>
              Login
            </button>
          </span>
        </p>

      </div>
    </div>
  );
}