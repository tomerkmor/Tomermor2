// app/protected/page.jsx
"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
const EcommercePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return <div> DASHBOARD</div>;
};

export default EcommercePage;
