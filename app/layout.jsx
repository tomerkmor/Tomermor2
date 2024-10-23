"use client";

import localFont from "next/font/local";
import "./globals.css";

import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider, ThemeContext } from "@/context/ThemeContext"; // Ensure the path is correct
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { getSession } from "next-auth/react"; // Import getSession
import React, { useContext, useEffect, useState } from "react";

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

// Main layout component
export default function RootLayout({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <SessionProvider session={session}>
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
        </SessionProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// Main component to apply theme styles
const MainComponent = ({ children }) => {
  const { theme, backgroundColors } = useContext(ThemeContext);
  const background = backgroundColors[theme] || "#ffffff"; // Fallback to white

  return <div style={{ background, minHeight: "100vh" }}>{children}</div>;
};
