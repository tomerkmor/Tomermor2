// app/protected/page.jsx
"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import NewHeader from "@/components/UI/NewHeader";
import App from "./App";
import { ThemeContext } from "@/context/ThemeContext";

const PlacePlannerPage = () => {
  const { token, logout } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setisLoading] = useState(true);

  const { theme, setTheme, backgroundColors } = useContext(ThemeContext);
  //authentication
  useEffect(() => {
    setTheme('placePlanner')
  }, [])
  /*
  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    } else {
      setisLoading(false);
    }
  }, [token, router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
*/
  return <App />;
};

export default PlacePlannerPage;
