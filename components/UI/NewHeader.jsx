"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";
import classes from "./NewHeader.module.css";


const NewHeader = ({}) => {
  const { token, logout } = useContext(AuthContext);
  const { theme, setTheme, backgroundColors } = useContext(ThemeContext);


  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleHomePageClicked = () => {
    router.push("/");
  };

  const toggleMenuHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const signOutHandler = () => {
    toggleMenuHandler();
    signOut();
    logout();
  };

  return (
    <div>
      <div className={classes.header} style={{background: backgroundColors[theme]}}>
        <div className={classes.contentContainer}>
          <div onClick={handleHomePageClicked} className={classes.logo}>
            TOMER MOR
          </div>

          <button
            style={{ transform: menuOpen ? "rotate(90deg)" : "none" }}
            onClick={toggleMenuHandler}
          >
            &#9776;
          </button>
        </div>
      </div>
      {/* Keep the menu div always rendered */}
      <div
        className={`${menuOpen ? classes.active : ""} ${classes.showMenu}`}
        style={{ display: menuOpen ? "block" : "none" }}
      >
        <Link href="/projects" onClick={toggleMenuHandler}>
          Projects List
        </Link>
        <a onClick={toggleMenuHandler}>Edit Profile - SOON</a>
        <button onClick={signOutHandler}>Sign-out</button>
      </div>
    </div>
  );
};

export default NewHeader;
