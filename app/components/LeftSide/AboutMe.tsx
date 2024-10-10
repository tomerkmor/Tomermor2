import React from "react";
import styles from "./AboutMe.module.css";
import Icons from "./Icons";

const AboutMe: React.FC = () => {
  const handleDownload = () => {
    const cvUrl = '/Tomer Mor - CV.pdf'; // Access the file in the public folder
    const a = document.createElement('a');
    a.href = cvUrl;
    a.download = "TomerMorCV.pdf"; // Customize the download filename if needed
    a.click();
  };

  return (
    <section className={styles["container"]} id="about">
      <h2 className={styles["title"]}>About Me.</h2>
      <p className={styles["description"]}>
        Motivated Computer Science graduate with a strong foundation in web
        development, seeking an entry-level React Developer position. Proficient
        in HTML, CSS, JavaScript, and React, with hands-on experience in
        building responsive web applications. Dedicated to continuous learning
        and problem-solving with a passion for front-end development.
      </p>
      <Icons />
      <button className={styles.button} onClick={handleDownload}>Download CV +</button>
    </section>
  );
};

export default AboutMe;
