import React, { forwardRef } from "react";
import dummyData from "@/data/projectsData";
import classes from "./ProjectsSlider.module.css";

import Button2 from "../UI/Button2";
import Image from "next/image";
import Link from "next/link";

const ProjectsSlider = forwardRef((props, ref) => {
  return (
    <div>
      <section ref={ref} id="projects" className={classes.container}>
        <h2 className="mainTitle">Projects.</h2>
        <p>Here are a few of my projects I've worked on.</p>

        <ul className={classes.projects}>
          {dummyData.map((project) => (
            <li key={project.id} className={classes.itemList}>
              <a href={project.link}>
                <Image
                  src={project.img}
                  width={500}
                  height={500}
                  alt="Project"
                  style={{ objectFit: "cover" }} // Correct way to set object-fit
                />
              </a>

              <div className={classes.projectContent}>
                <h3 className={classes.title}>{project.title}</h3>
                <p>{project.description}</p>

                <div className={classes.techs}>
                  {project.techs.map((tech, index) => (
                    <p key={index}>{tech}</p> // Add key to nested map
                  ))}
                </div>

                <div className={classes.links}>
                  <Button2 className="link" type="link" href={project.link}>
                    Demo
                  </Button2>
                  <Button2 className="link" type="link" href={project.github}>
                    Github
                  </Button2>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Button2
          text="Explore More"
          className="button"
          href="/projects"
          type="link"
        />
      </section>
    </div>
  );
});

export default ProjectsSlider;
