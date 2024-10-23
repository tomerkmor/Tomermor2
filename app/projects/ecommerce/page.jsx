// app/protected/page.jsx
"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";
import { redirect, useRouter } from "next/navigation";

const EcommercePage = () => {
  const { token, logout } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // set the background design
  useEffect(() => {
    if(!token){
      redirect('/projects/auth/login')
    }
    setTheme("ecommerce");
    setIsLoading(false);
  }, [setTheme]);


  if (isLoading) {
    return <h1>The page is Loading...</h1>;
  }

  return (
    <div
      className="pt-20 bg-red-700 h-screen w-screen"
      style={{ background: theme, minHeight: "100vh" }}
    >
      <h1>Ecommerce Project</h1>

      <div className="bg-slate-600 p-4">
        <p>Some unrelated content</p>
      </div>
    </div>
  );
};

export default EcommercePage;
