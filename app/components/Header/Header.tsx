import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

type Theme = "light" | "dark";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme() as { theme: Theme; setTheme: React.Dispatch<React.SetStateAction<Theme>> };
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeColors: Record<Theme, string> = {
    light: "#f0f0f0",
    dark: "#333",
  };

  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section based on visible section
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section); // Clean up observers on component unmount
      });
    };
  }, []);

  let cssClasses = styles.header;
  if (theme === "light") {
    cssClasses = `${styles.header} ${styles.light}`;
  } else {
    cssClasses = `${styles.header} ${styles.dark}`;
  }

  return (
    <header className={cssClasses}>
      <p>Tomer Mor</p>
      <div id={styles.navigation}>
        <button
          className={styles.themeButton}
          onClick={toggleTheme}
          style={{ backgroundColor: themeColors[theme] }}
        >
          <span className={styles.circle} />
        </button>
        <p
          onClick={() => scrollToSection("home")}
          className={`${activeSection === "home" ? styles.active : ""} ${styles.button}`}
        >
          Home
        </p>
        <p
          onClick={() => scrollToSection("about")}
          className={`${activeSection === "about" ? styles.active : ""} ${styles.button}`}
        >
          About
        </p>
        <p
          onClick={() => scrollToSection("projects")}
          className={`${activeSection === "projects" ? styles.active : ""} ${styles.button}`}
        >
          Projects
        </p>
        <p
          onClick={() => scrollToSection("contact")}
          className={`${activeSection === "contact" ? styles.active : ""} ${styles.button}`}
        >
          Contact
        </p>
      </div>
    </header>
  );
  
};

export default Header;
