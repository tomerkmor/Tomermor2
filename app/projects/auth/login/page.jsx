"use client";
// app/register/page.js
import LoginForm from "@/components/Auth/LoginForm";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";

const RegisterPage = () => {
  const { token, logout } = useContext(AuthContext);
  const router = useRouter();
  //const [isLoading, setisLoading] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  /*
  useEffect(() => {
    if (!token) {
      // if there is no key move to another page..
      //router.push("/projects/auth/login");
    } else {
      setisLoading(false);
    }
  }, [token, router]);
  

  if (isLoading) {
    return <p>Loading...</p>;
  }
  */

  return (
    <div>
      {token ? <h1 style={{marginTop: '5rem'}}>You are successfully logged in!<br/>Feel free to logout from the navbar</h1>: <LoginForm />}
    </div>
  );
};

export default RegisterPage;
