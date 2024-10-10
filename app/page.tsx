"use client"; // Mark this file as a client component

import { ThemeProvider, useTheme } from "./context/ThemeContext"; // Ensure correct import path
import "./globals.css";
import Header from "./components/Header/Header";
import RightSide from "./components/RightSide/RightSide";
import LeftSide from "./components/LeftSide/LeftSide";

function MyApp() {
  return (
    <ThemeProvider>
      <div className="container">
        <LeftSide />
        <RightSide />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
