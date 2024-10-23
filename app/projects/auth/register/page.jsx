// app/components/RegisterForm.js
"use client";

import React, { useContext, useState } from "react";

import classes from "../components/StateLogin.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

import NewHeader from "@/components/UI/NewHeader";
import Input from "../components/Input";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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

    if (password !== confirmPassword) {
      setError("Passwords do no match!");
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
        <form onSubmit={handleSubmit} className={classes.form}>
          <h2>Register</h2>

          <div className={classes["control-row"]}>
            <Input
              label="Username"
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />

            <Input
              label="Email"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={classes["control-row"]}>
            <Input
              label="Password"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <Input
              label="Confirm Password"
              id="password"
              type="password"
              name="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <p className={classes["form-actions"]}>
            <button type="reset">Reset</button>
            <button className={classes["form-priamry-button"]}>Register</button>
          </p>
        </form>

        <p>Already a registered?</p>
        <Link href="login" className={classes["form-priamry-button"]}>
          Login
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
