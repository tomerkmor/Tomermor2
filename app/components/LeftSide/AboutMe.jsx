import { forwardRef } from "react";
import styles from "./AboutMe.module.css";
import Icons from "./Icons";
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
    <section ref={ref} id="about" className={styles.container}>
      <h2 className={styles.title}>About Me.</h2>
      <p className={styles.description}>
        Motivated Computer Science graduate with a strong foundation in web
        development, seeking an entry-level React Developer position. Proficient
        in HTML, CSS, JavaScript, and React, with hands-on experience in
        building responsive web applications. Dedicated to continuous learning
        and problem-solving with a passion for front-end development.
      </p>
      <Icons />
      <Button onClick={handleDownload}>Download CV +</Button>
    </section>
  );
});

export default AboutMe;
