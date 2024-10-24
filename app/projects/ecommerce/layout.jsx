// app/protected/page.jsx
"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";
import { redirect, useRouter } from "next/navigation";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { token, logout } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  // set the background design
  useEffect(() => {
    if (!token) {
      redirect("/projects/auth/login");
    }

    setTheme("ecommerce");
    setIsLoading(false);
  }, [setTheme]);

  if (isLoading) {
    return <h1>The page is Loading...</h1>;
  }

  return (
    <div
      className="ecommerce left-0 fixed pt-20 bg-mastik min-h-screen w-screen"
      style={{ background: theme}}
    >

      <div className="flex justify-between min-h-screen text-left pb-44">
        <Sidebar />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
