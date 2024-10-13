import { forwardRef } from "react";
import classes from "./AboutMe.module.css";
import Icons from "./Icons";
import Skills from "./Skills";
import Button from "../UI/Button";

const AboutMe = forwardRef((props, ref) => {
  const handleDownload = () => {
    const cvUrl = "/Tomer Mor - CV.pdf";
    const a = document.createElement("a");
    a.href = cvUrl;
    a.download = "TomerMorCV.pdf";
    a.click();
  };

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
