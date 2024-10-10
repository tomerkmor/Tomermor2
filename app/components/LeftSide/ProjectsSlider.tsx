import React, { useState } from "react";
import dummyData from "../../data/projectsImgs";
import styles from "./ProjectsSlider.module.css";

const ProjectsSlider: React.FC = () => {
  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the "+" button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < dummyData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  // Function to handle the "-" button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const { img, title, description, keyFeatures, cons, link } =
    dummyData[currentIndex];

  return (
    <section className={styles.projects} id="projects">
      <h2>Projects.</h2>
      <div className={styles.container}>
        <div>
          <button onClick={handlePrevious} disabled={currentIndex === 0}>
            -
          </button>
          <img
            src={img}
            style={{
              backgroundImage: `url(${img})`,
              width: '90%',
              height: '80vh',
              borderRadius: '6px', 
            }}
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
          <button className={styles.button}><a href={link}>Check It Out!</a></button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
