import { useState, FormEvent } from "react";
//import Input from "./Input";
//import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
//import { useInput } from "../hooks/useInput";

// good for every key stroke validation
export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput<string>("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput<string>("", (value) => hasMinLength(value, 6));

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email address!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">
          Register
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
