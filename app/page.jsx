"use client"; // Mark this file as a client component

import { useRef } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";
import MainHeader from "../components/MainHeader/main-header";
import Home from "../components/Homepage/Home";
import AboutMe from "../components/Homepage/AboutMe";
import ProjectsSlider from "../components/Homepage/ProjectsSlider";
import Contact from "../components/Homepage/Contact";
import "../components/UI/fontAwesome";

function MyApp() {
  const sectionsRef = useRef([]);

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
    <ThemeProvider>
      <MainHeader scrollIntoSection={scrollToSection} />
      <Home ref={(el) => (sectionsRef.current[0] = el)} />
      <AboutMe ref={(el) => (sectionsRef.current[1] = el)} />
      <ProjectsSlider ref={(el) => (sectionsRef.current[2] = el)} />
      <Contact ref={(el) => (sectionsRef.current[3] = el)} />
    </ThemeProvider>
  );
}

export default MyApp;
