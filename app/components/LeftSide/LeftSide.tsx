// Header.tsx
import { useTheme } from "../../context/ThemeContext";
import styles from "./LeftSide.module.css"; // Assuming you're using CSS modules
import Header from "../Header/Header";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Projects from "./ProjectsSlider";
import Contact from "./Contact";

const LeftSide: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Define colors for each theme
  const themeColors = {
    light: "#f0f0f0", // Light theme color
    dark: "#333", // Dark theme color
    cyan: "#00bcd4", // Cyan theme color
  };

  let cssClasses = styles["left-side"];
  if (theme === "light") {
    cssClasses += " light";
  } else {
    cssClasses += " dark";
  }

  return (
    <div className={cssClasses}>
      <div className={styles.container}>
        <Header />
        <Welcome />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default LeftSide;
