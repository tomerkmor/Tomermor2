"use client";

import localFont from "next/font/local";
import "./globals.css";

import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider, ThemeContext } from "@/context/ThemeContext"; // Ensure the path is correct
import React, { useContext, useEffect } from "react";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <html lang="en">
          <head>
            <meta charSet={"UTF-8"} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>React App</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>
            <MainComponent>
              <div id="modal"></div>
              <div className="main-container">{children}</div>
            </MainComponent>
          </body>
        </html>
      </AuthProvider>
    </ThemeProvider>
  );
}

const MainComponent = ({ children }) => {
  const { theme, setTheme, backgroundColors } = useContext(ThemeContext);

  console.log(theme)

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "portfolio" ? "projects" : "portfolio"
    );
  };

  return (
    <div
      style={{ background: backgroundColors[theme], minHeight: "100vh" }}
    >
      {children}

    </div>
  );
};
