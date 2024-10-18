"use client";
import { useEffect, useRef, useState } from "react";
import classes from "./main-header.module.css";

export default function MainHeader({ scrollIntoSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [selectedSection, setSelectedSection] = useState("home");

  const navRef = useRef(null);

  const toggleMenuHandler = () => {
    setMenuOpen((prevState) => !prevState);
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
      threshold: 0.5,
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
    // PROBABLY USELESS CODE - REDUNTANT
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
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, []);

  return (
    <>
      <div className={classes.header}>
        <div className={classes.contentContainer}>
          <div className={classes.logo}>TOMER MOR</div>

          {!menuOpen && (
            <nav ref={navRef} className={`${classes.nav}`}>
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
            </nav>
          )}

          <button
            className={classes.mobileMenuToggle}
            style={{ transform: menuOpen ? "rotate(90deg)" : "none" }}
            onClick={toggleMenuHandler}
          >
            &#9776;
          </button>
        </div>
        {/* Dropdown Menu */}
        {menuOpen && (
          <section id='projects'
            className={`${menuOpen ? classes.active : ""} ${classes.showMenu}`}
          >
            <nav>
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
            </nav>
          </section>
        )}
      </div>

    </>
  );
}
