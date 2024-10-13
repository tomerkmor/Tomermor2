import React, { forwardRef, useState } from "react";
import dummyData from "../../data/projectsImgs";
import styles from "./ProjectsSlider.module.css";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";
import Image from "next/image";
const ProjectsSlider = forwardRef((props, ref) => {

  const handleClick = () => {
    alert('sorry, currently on development..')
  }

  return (
    <section ref={ref} className={styles.container}>
      <h2 className="mainTitle">Projects.</h2>
      <p>Here are a few of my projects I've worked on.</p>

      <ul className={styles.projects}>
        {dummyData.map((project) => (
          <li key={project} className={styles.itemList}>
            <a href={project.link}>
              {
                <Image
                  src={project.img}
                  width={300}
                  height={300}
                  alt="Project"
                  layout="responsive"
                  object-fit="cover"
                />
              }
            </a>
          </li>
        ))}
      </ul>

      <Button2 text="Explore More" className={"button"} onClick={handleClick}/>
    </section>
  );
});

export default ProjectsSlider;
