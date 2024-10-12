import { useRef, useState } from "react";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";
import logoImg from "@/public/profileImg.jpeg";
import classes from "./main-header.module.css";

export default function MainHeader({ scrollIntoSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0); // Track active section

  const toggleMenuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleScroll = (sectionIndex) => {
    setActiveSection(sectionIndex); // Set the active section on click
    scrollIntoSection(sectionIndex); // Scroll to the section
  };

  return (
    <>
      <header className={classes.header}>
        <HeaderBackground />
        <div className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          TOMER MOR
        </div>

        <nav className={`${classes.nav} ${menuOpen ? classes.active : ""}`}>
          <ul className={`${classes.links} ${menuOpen ? classes.enable : ""}`}>
            <li className={classes.navItem} onClick={() => handleScroll(0)}>
              <span
                className={
                  activeSection === 0
                    ? `${classes["active-link"]} ${classes.navText} ${menuOpen ? classes.enable : ""}`
                    : classes.navText
                }
              >
                Home
              </span>
            </li>
            <li className={classes.navItem} onClick={() => handleScroll(1)}>
              <span
                className={
                  activeSection === 1
                    ? `${classes["active-link"]} ${classes.navText}`
                    : classes.navText
                }
              >
                About
              </span>
            </li>
            <li className={classes.navItem} onClick={() => handleScroll(2)}>
              <span
                className={
                  activeSection === 2
                    ? `${classes["active-link"]} ${classes.navText}`
                    : classes.navText
                }
              >
                Projects
              </span>
            </li>
            <li className={classes.navItem} onClick={() => handleScroll(3)}>
              <span
                className={
                  activeSection === 3
                    ? `${classes["active-link"]} ${classes.navText}`
                    : classes.navText
                }
              >
                Contact
              </span>
            </li>
          </ul>
        </nav>
        <div className={classes.mobileMenuToggle} onClick={toggleMenuHandler}>
          &#9776;
        </div>
      </header>
    </>
  );
}
