'use client'
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    // Initialize state with the token from localStorage
    return typeof window !== "undefined" ? localStorage.getItem("token") : null;
  });

  const [userData, setUserData] = useState(() => {
    // Initialize state with user data from localStorage
    const user = typeof window !== "undefined" ? localStorage.getItem("user") : null;
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    // On mount, check if there's a token in localStorage
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  // Function to update token in state and localStorage
  const login = (newToken, user) => {
    localStorage.setItem("token", newToken);
    console.log('user: ', user)
    localStorage.setItem("user", JSON.stringify(user));
    setToken(newToken);
    setUserData(user)
  };

  // Function to log out and clear token
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUserData({username: ''});
  };

  return (
    <AuthContext.Provider value={{ token, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
