// app/protected/page.jsx
"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProtectedPage = () => {
  const { token, logout } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // set the background design
  useEffect(() => {
    setTheme('projects');
    setIsLoading(false)
  }, [setTheme]);
  
  if(isLoading){
    return <h1>The page is Loading...</h1>
  }
  
  const handleLogout = () => {
    logout();
  };
  
  

  return (
    <div style={{background: theme, minHeight: '100vh'}}>
      <h3 onClick={handleLogout}>Logout</h3>
      <h1>Projects List</h1>


      <div style={{ display: "flex", flexDirection: "column"}}>
        <Link href="projects/tic-tac-toe">Tic Tac Toe</Link>
        <Link href="projects/reaction-game">Reaction Game</Link>
        <Link href="projects/project-management">Project Management</Link>
        <Link href="projects/place-planner">Place Planner</Link>
        <Link href="projects/react-quiz">React Quiz</Link>
        <Link href="projects/auth/login">Authentication</Link>
        <Link href="projects/ecommerce">E-commerce</Link>
      </div>
    </div>
  );
};

export default ProtectedPage;
