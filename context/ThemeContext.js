"use client";

import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("portfolio");

  const backgroundColors = {
    portfolio: "#ffffff",
    projects: "#ffffff",
    authentication: "linear-gradient(#d0d6d9, #b1b4ba)",
    placePlanner: `#ffffff`,
    projectsManagement: "#ffffff",
    reactQuiz: "purple",
    reactionGame: "radial-gradient(#186a5e,#053339)",
    tictactoe: `radial-gradient(circle at top, rgba(241, 210, 70, 0.98), rgba(250, 176, 103, 0.87)),
              url("/projects/tic-tac-toe/bg-pattern-dark.png")`,
    ecommerce: "#ffffff",
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, backgroundColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
