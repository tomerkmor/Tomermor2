import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./LeftSide.module.css"; // Assuming you're using CSS modules
import Welcome from "./Welcome.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./ProjectsSlider";
import Contact from "./Contact.jsx";

const LeftSide = forwardRef((props, ref) => {
  const welcomeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Expose these refs to parent (for scrollIntoView)
  useImperativeHandle(ref, () => ({
    scrollToSection: (index) => {
      let targetRef;
      switch (index) {
        case 0:
          targetRef = welcomeRef;
          break;
        case 1:
          targetRef = aboutMeRef;
          break;
        case 2:
          targetRef = projectsRef;
          break;
        case 3:
          targetRef = contactRef;
          break;
        default:
          break;
      }

      if (targetRef && targetRef.current) {
        const sectionTop = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offset = -10 * 16; 

        window.scrollTo({
          top: sectionTop + offset,
          behavior: "smooth",
        });
      }
    }
  }));

  return (
    <div className={styles.container}>
      <Welcome id="home" ref={welcomeRef} />
      <AboutMe id="about" ref={aboutMeRef} />
      <Projects id="projects" ref={projectsRef} />
      <Contact id="contact" ref={contactRef} />
    </div>
  );
});

export default LeftSide;
