// app/protected/page.jsx
"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";

import someImg from "@/public/profileImg.jpeg";
import Image from "next/image";
const EcommercePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { userData } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=>{
    setIsLoading(false)
  }, [])

  if(isLoading){
    return <h1>The page is loading...</h1>
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <p>Welcome back <b>{userData.username}</b></p>
        <div className="flex bg-gray-300 text-black gap-1 items-center rounded-lg overflow-hidden">
          <Image src={someImg} className="w-8 h-8" alt="Profile Img" />
          <span className="px-2">{userData.username}</span>
        </div>
      </div>
    </>
  );
};

export default EcommercePage;
