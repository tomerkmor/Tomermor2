import React from "react";
import classes from "./Skills.module.css";
import Icons from "./Icons";

const Skills = () => {
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <div className={classes.inner}>
          <h2>ICON</h2>
          <h2>Education</h2>
          <ul>
            <li>
              <p className={classes.subTitle}>
                Bachelor’s Degree in C.S
              </p>
              <p className={classes.subDescription}>
                Open University of Israel | Dean’s List
              </p>
            </li>

            <li>
              <p className={classes.subTitle}>
                React, Redux, and Next.js Development Course
              </p>
              <p className={classes.subDescription}>Udemy</p>
            </li>

            <li>
              <p className={classes.subTitle}>FreeCodeCamp</p>
              <p className={classes.subDescription}>
                HTML, CSS, JavaScript, and libraries: Bootstrap, jQuery,
                SASS, React, Redux.
              </p>
            </li>

            <li>
              <p className={classes.subTitle}>High School Diploma (Bagrut)</p>
              <p className={classes.subDescription}>5 points in Math, English, Biology, and Chemistry</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.column}>
        <div className={classes.inner}>
          <h2>ICON</h2>
          <h2>Skills</h2>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <p className={classes.subTitle}>Languages I speak</p>
          <p className={classes.subDescription}>HTML, CSS, JavaScript, SQL</p>
          <p className={classes.subTitle}>Web Development:</p>
          <p className={classes.subDescription}>React, Redux, Next.js, Node.js, Express, MongoDB, REST API</p>
          <p className={classes.subTitle}>Dev Tools:</p>
          <ul>
            <li>Github</li>
            <li>Netlify</li>
            <li>Tailwind CSS</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>

      <div className={classes.column}>
        <div className={classes.inner}>
          <h2>ICON</h2>
          <h2>Hobbies</h2>
          <p>
            I enjoy <em>staying active</em> through gym workouts, spending
            quality time with my <em>family</em>, and immersing myself in{" "}
            <em>gaming</em>. My passion for
            <em> coding</em> drives me to seek out <em>new challenges</em> and
            projects, allowing me to continuously <em>grow</em> and innovate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
