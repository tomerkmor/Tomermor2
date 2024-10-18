'use client'
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// AuthContext provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    // Initialize state with the token from localStorage
    return typeof window !== "undefined" ? localStorage.getItem("token") : null;
  });

  useEffect(() => {
    // On mount, check if there's a token in localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Function to update token in state and localStorage
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  // Function to log out and clear token
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
