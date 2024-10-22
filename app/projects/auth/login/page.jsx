"use client";
// app/register/page.js
import LoginForm from "@/components/Auth/LoginForm";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";

import Header from "../components/Header.jsx";
import Login from "../components/Login.jsx";
import Signup from "../components/SignUp.jsx";
import StateLogin from "../components/StateLogin.jsx";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const { token, logout } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);

  return (
      <StateLogin />
  )
};

export default LoginPage;
