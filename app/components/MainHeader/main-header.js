import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";
import logoImg from "@/public/profileImg.jpeg";
import classes from "./main-header.module.css";
import Social from "../RightSide/Social";

export default function MainHeader({ scrollIntoSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0); // Track active section
  const [selectedSection, setSelectedSection] = useState("home"); // Track the selected link

  const [message, setMessage] = useState(null); // Store one message, can be null initially

  const handleImageClick = () => {
    setMessage("🎉 Hey! You've clicked on my image! 😜");
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const navRef = useRef("");

  const toggleMenuHandler = () => {
    setMenuOpen((prevState) => !prevState); // Toggle menu state
  };

  const handleScroll = (sectionIndex, sectionName) => {
    setActiveSection(sectionIndex); // Set the active section on click
    setSelectedSection(sectionName); // Set the selected section on click
    scrollIntoSection(sectionIndex); // Scroll to the section
    setMenuOpen(false); // Close the menu after selection
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId); // Update active section based on visible section
          setSelectedSection(sectionId); // Also update selected section for the navbar link
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Handle the case when the user is near the top (within 50px)
    const handleScrollToTop = () => {
      if (window.scrollY < 50) {
        setActiveSection("home");
        setSelectedSection("home");
      }
    };

    window.addEventListener("scroll", handleScrollToTop);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section); // Clean up observers on component unmount
      });
      window.removeEventListener("scroll", handleScrollToTop); // Clean up scroll event listener
    };
  }, []);

  return (
    <>
      <header className={classes.header}>
        <HeaderBackground />
        <div className={classes.logo}>
          <Image
            src={logoImg}
            alt="A plate with food on it"
            onClick={handleImageClick}
            priority
          />
          <div className={classes["img-text-container"]}>
            TOMER MOR
            <Social />
          </div>
        </div>

        <nav
          ref={navRef}
          className={`${classes.nav} ${menuOpen ? classes.active : ""}`}
        >
          <a
            className={`${classes.item} ${
              selectedSection === "home" ? classes.selected : ""
            }`}
            onClick={() => handleScroll(0, "home")}
          >
            Home
          </a>
          <a
            className={`${classes.item} ${
              selectedSection === "about" ? classes.selected : ""
            }`}
            onClick={() => handleScroll(1, "about")}
          >
            About
          </a>
          <a
            className={`${classes.item} ${
              selectedSection === "projects" ? classes.selected : ""
            }`}
            onClick={() => handleScroll(2, "projects")}
          >
            Projects
          </a>
          <a
            className={`${classes.item} ${
              selectedSection === "contact" ? classes.selected : ""
            }`}
            onClick={() => handleScroll(3, "contact")}
          >
            Contact
          </a>

          {menuOpen && (
            <button
              className={`${classes.mobileMenuToggle} ${classes["nav-close-btn"]}`}
              onClick={toggleMenuHandler}
            >
              X
            </button>
          )}
        </nav>

        {!menuOpen && (
          <button
            className={
              menuOpen
                ? `${classes.mobileMenuToggle} ${classes["nav-close-btn"]}`
                : classes.mobileMenuToggle
            }
            onClick={toggleMenuHandler}
          >
            &#9776;
          </button>
        )}
      </header>

      {/* Display message if it's set */}
      {message && (
        <div className={classes["pop-up-message"]} style={{ top: "80px" }}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}
