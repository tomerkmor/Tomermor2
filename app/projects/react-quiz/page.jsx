// app/protected/page.jsx
"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/context/ThemeContext";

const ReactQuiz = () => {
  const { token, logout } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setisLoading] = useState(true);

  const { theme, setTheme, backgroundColors } = useContext(ThemeContext);

  useState(() => {
    setTheme("reactQuiz");
  }, []);

  const handleLogout = () => {
    logout();
  };
  /*
  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    }else{
        setisLoading(false)
    }
  }, [token, router]);

  if(isLoading){
    return <p>Loading...</p>
  }
*/
  return (
    <div>
      <h3 onClick={handleLogout}>Logout</h3>
      <h1>React Quiz</h1>
      {token ? <p>You are authenticated!</p> : <p>Redirecting to login...</p>}
    </div>
  );
};

export default ReactQuiz;
