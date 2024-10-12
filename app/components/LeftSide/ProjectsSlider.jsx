import React, { forwardRef, useState } from "react";
import dummyData from "../../data/projectsImgs";
import styles from "./ProjectsSlider.module.css";

const ProjectsSlider = forwardRef( (props,ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < dummyData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const { img, title, description, keyFeatures, cons, link } =
    dummyData[currentIndex];

  return (
    <section ref={ref} className={styles.projects} id="projects">
      <h2>Projects.</h2>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <button onClick={handlePrevious} disabled={currentIndex === 0}>
            -
          </button>
          <img
            src={img}
            alt={title}
            className={styles.projectImage} // Add class for styling
          />
          <button
            onClick={handleNext}
            disabled={currentIndex === dummyData.length - 1}
          >
            +
          </button>
        </div>

        <div className={styles.project}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <h4>Key Features:</h4>
          <ul className={styles.list}>
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h4>Cons:</h4>
          <ul className={styles.list}>
            {cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
          <a href={link} className={styles.button}>
            Check It Out!
          </a>
        </div>
      </div>
    </section>
  );
});

export default ProjectsSlider;
