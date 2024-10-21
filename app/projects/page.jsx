// app/protected/page.jsx
"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProtectedPage = () => {
  const { token, logout } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setisLoading] = useState(true);

  const handleLogout = () => {
    logout();
  };
  

  return (
    <div>
      <h3 onClick={handleLogout}>Logout</h3>
      <h1>Projects List</h1>


      <div style={{ display: "flex", flexDirection: "column"}}>
        <Link href="projects/tic-tac-toe">Tic Tac Toe</Link>
        <Link href="projects/reaction-game">Reaction Game</Link>
        <Link href="projects/project-management">Project Management</Link>
        <Link href="projects/place-planner">Place Planner</Link>
        <Link href="projects/react-quiz">React Quiz</Link>
        <Link href="projects/auth/login">Authentication</Link>
      </div>
    </div>
  );
};

export default ProtectedPage;
