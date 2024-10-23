"use client";
// app/register/page.js

import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import StateLogin from "../components/StateLogin.jsx";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const { token, logout } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);


  return <StateLogin />;
};

export default LoginPage;

/*
 return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <StateLogin />
    </SessionProvider>
  );
*/
