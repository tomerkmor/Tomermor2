"use client"; // Ensure this is a client component if using Next.js app directory

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import classes from './LoginForm.module.css'; // CSS module for styling (optional)

const LoginForm = () => {
  // State to store form data and messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const { login } = useContext(AuthContext)
  const router = useRouter()
  
  // Handle input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Reset messages
    setError('');
    setMessage('');

    // Check for empty fields
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed. Please try again.');
      }

      // If login is successful, store the token in localStorage
      login(data.token)
      localStorage.setItem('token', data.token);

      // Display success message
      setMessage('Login successful! Redirecting...');

      // Redirect to the next page or reload
      //window.location.href = '/protected'; // Redirect to dashboard (or another page)
      router.push('/protected')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={classes.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
        </div>

        {error && <span style={{ color: 'red' }}>{error}</span>}
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
      <Link href="register">Register</Link>
    </div>
  );
};

export default LoginForm;
