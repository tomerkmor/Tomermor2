// app/components/RegisterForm.js
"use client"; // Ensure this is a client component

import React, { useContext, useState } from "react";

import classes from "./RegisterForm.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

import NewHeader from "../UI/NewHeader";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  // Handle input changes
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      setError("Username is required");
      return;
    }
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }

    // Reset error message if validation passes
    setError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
      }
      const successData = await response.json();
      setMessage(successData.message);
      // let the user know that the request is being proccessing..
      setTimeout(() => {
        router.push("login");
      }, 2500);
    } catch (error) {
      setMessage(`${error}`);
    }
  };

  return (
    <>
      <NewHeader />
      <div className={classes.container}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
          </div>

          {error && <span style={{ color: "red" }}>{error}</span>}
          <button type="submit">Register</button>
          {message && <p>{message}</p>}
        </form>

        <p>Already a registered?</p>
        <Link href="login">Login</Link>
      </div>
    </>
  );
};

export default RegisterForm;
