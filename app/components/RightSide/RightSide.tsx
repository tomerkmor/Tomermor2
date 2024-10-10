// Header.tsx
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";

import styles from "./RightSide.module.css"; // Assuming you're using CSS modules
import Social from "./Social";
import tomerImg from "@/public/profileImg.jpeg";

const RightSide: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "cyan" : "light"
    );
  };

  // Define colors for each theme
  const themeColors = {
    light: "#f0f0f0", // Light theme color
    dark: "#333", // Dark theme color
    cyan: "#00bcd4", // Cyan theme color
  };

  return (
    <div className={styles.container}>
      <div className={styles["right-side"]}>
        <Image src={tomerImg} alt="Tomer's image" className={styles.mainImg} />
        <Social />
      </div>
    </div>
  );
};

export default RightSide;
