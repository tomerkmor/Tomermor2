"use client";
import Container from "./components/Container";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Header from "./components/Header";

export default function AuthLayout({ children }) {
  const { theme, setTheme, backgroundColors } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("authentication");
  }, []);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
