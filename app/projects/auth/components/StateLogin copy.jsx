import { useContext, useEffect, useState } from "react";
import Input from "./Input";
import { isNotEmpty, hasMinLength } from "../login/util/validation";
import { useInput } from "../login/hooks/useInput";
import classes from "./StateLogin.module.css";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import Link from "next/link";

// Good for every keystroke validation
export default function Login({ onRegister }) {
  const { data: session, status } = useSession();
  const [error, setError] = useState("");

  const {
    value: enteredUsername,
    handleInputChange: handleUsernameChange,
    handleInputBlur: handleUsernameBlur,
    handleReset: handleUsernameReset,
    hasError: emailHasError,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: enteredPassword,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    handleReset: handlePasswordReset,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleReset = () => {
    handleUsernameReset("");
    handlePasswordReset("");
    setError("");
  };

  const { token, login } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: enteredUsername,
          password: enteredPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed. Please try again.");
      }

      login(data.token);
      localStorage.setItem("token", data.token);

      // Redirect to the next page or reload
      router.push("/projects/auth/login");
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    }
  };

  // Handling loading state
  if (status === "loading") {
    return <p>Loading...</p>; 
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2>Login</h2>

      {token || session ? (
        <>
          <h2>
            You are successfully logged in!
            <br />
            Feel free to logout from the navbar
          </h2>
          <Link href="/projects/ecommerce">Ecommerce Website</Link>
        </>
      ) : (
        <>
          <div className={classes["control-row"]}>
            <Input
              label="Username"
              id="username"
              type="username"
              name="username"
              onBlur={handleUsernameBlur}
              onChange={handleUsernameChange}
              onReset={handleUsernameReset}
              value={enteredUsername}
              error={emailHasError && "Please enter a username!"}
            />

            <Input
              label="Password"
              id="password"
              type="password"
              name="password"
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange}
              onReset={handlePasswordReset}
              value={enteredPassword}
              error={passwordHasError && "Please enter a valid password!"}
            />
          </div>

          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Don't have an account?{" "}
            <Link href="register" className={classes["sign-up"]}>
              Sign Up
            </Link>
          </p>

          <button
            type="button"
            onClick={() => signIn("google")}
            className="bg-mastik p-2 mt-2 text-white rounded-lg border-none"
          >
            Login with Google
          </button>

          <p className={classes["form-actions"]}>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
            <button className={classes["form-priamry-button"]}>Login</button>
          </p>
        </>
      )}
    </form>
  );
}
