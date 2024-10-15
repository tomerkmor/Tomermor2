import React from "react";
import classes from "./Footer.module.css";
import Social from "../RightSide/Social";
import ContactForm from "./ContactForm";
const Footer = ({ openForm }) => {
  let cssClasses;
  if (openForm) {
    cssClasses = classes.expandedContainer;
  } else {
    cssClasses = classes.container;
  }

  return (
    <div className={classes.primaryContainer}>
      <div className={cssClasses}>
        <div className={classes.content}>
          <h1>Tomer Mor.</h1>
          <p>Living, learning & leveling up</p>
          <p>one day at a time.</p>
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Footer;
