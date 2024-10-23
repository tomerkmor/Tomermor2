"use client"; // Mark this file as a client component

import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import RootLayout from "./layout"; // Adjust path if necessary
import MainHeader from "../components/MainHeader/main-header";
import Home from "../components/Homepage/Home";
import AboutMe from "../components/Homepage/AboutMe";
import ProjectsSlider from "../components/Homepage/ProjectsSlider";
import Contact from "../components/Homepage/Contact";
import "../components/UI/fontAwesome";
import { useSession } from "next-auth/react"; // Use NextAuth's hook to get the session

function MyApp() {
  const { theme, setTheme } = useContext(ThemeContext);
  const sectionsRef = useRef([]);

  useEffect(() => {
    setTheme("portfolio");
  }, [setTheme]);

  const scrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      const yOffset = 0; // Adjust this value to match the height of your header or any margin
      const y =
        sectionsRef.current[index].getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="main-container">
      <MainHeader scrollIntoSection={scrollToSection} />
      <Home ref={(el) => (sectionsRef.current[0] = el)} />
      <AboutMe ref={(el) => (sectionsRef.current[1] = el)} />
      <ProjectsSlider ref={(el) => (sectionsRef.current[2] = el)} />
      <Contact ref={(el) => (sectionsRef.current[3] = el)} />
    </div>
  );
}

export default MyApp;
