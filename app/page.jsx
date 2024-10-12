"use client"; // Mark this file as a client component

import { ThemeProvider } from "./context/ThemeContext";
import MainHeader from "./components/MainHeader/main-header";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import { useRef } from "react";

function MyApp() {
  const sectionsRef = useRef();

  const scrollToSection = (index) => {
    sectionsRef.current.scrollToSection(index);
  };

  return (
    <ThemeProvider>
        <MainHeader scrollIntoSection={scrollToSection} />
      <div className="container">
        <LeftSide ref={sectionsRef} />
        {/* <RightSide /> */}
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
