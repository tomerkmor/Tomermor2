import { forwardRef } from "react";
import classes from "./AboutMe.module.css";
import Skills from "./Skills";

const AboutMe = forwardRef((props, ref) => {
  return (
    <>
      <div className={classes.primaryContainer}>
        <section ref={ref} id="about" className={`${classes.container}`}>
          <h2 className={`mainTitle ${classes.title}`}>About Me</h2>
          <p className={classes.description}>
            I'm a Computer Science graduate from the Open University of Israel,
            passionate about web development and problem-solving. Proficient in
            HTML, CSS, JavaScript, and React, I have hands-on experience
            building responsive web applications. I’m a quick learner, eager to
            contribute and grow as a front-end developer, delivering
            high-quality results in a collaborative team environment.
          </p>
        </section>
      </div>
      <Skills />
    </>
  );
});

export default AboutMe;
