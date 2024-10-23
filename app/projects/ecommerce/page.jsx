// app/protected/page.jsx
"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Sidebar from './components/Sidebar'
import Content from './components/Content'
const EcommercePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { token, logout } = useContext(AuthContext);
  const {data: session} = useSession()

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [userEmail, setUserEmail] = useState('');
  

  // set the background design
  useEffect(() => {
    if (!token && !session) {
      redirect("/projects/auth/login");
    }

    if(session){
      setUserEmail(session.user.email)
    }

    if(token){
      setUserEmail('manual login')
    }
    
    setTheme("ecommerce");
    setIsLoading(false);
    
  }, [setTheme]);

  if (isLoading) {
    return <h1>The page is Loading...</h1>;
  }

  return (
    <div
      className="fixed left-0 pt-20 bg-mastik h-screen w-screen"
      style={{ background: theme, minHeight: "100vh" }}
    >
      <h1>Ecommerce Project</h1>

      <div className="flex p-4 justify-between">
        <Sidebar />
        <Content />
        
      </div>
    </div>
  );
};

export default EcommercePage;
