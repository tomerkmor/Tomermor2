// app/protected/page.jsx
"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import App from './App'

const TicTacToe = () => {
  const { token, logout } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setisLoading] = useState(true);
  

  const handleLogout = () => {
    logout()
  }
  
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

  return (
    <div>
      {token ? <App /> : <p>Redirecting to login...</p>}
    </div>
  );
};

export default TicTacToe;
