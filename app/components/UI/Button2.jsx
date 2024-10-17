import React from "react";
import classes from "./Button2.module.css";

const Button = ({
  children,
  className = "",
  text,
  onClick = () => {},
  ...props
}) => {
  return (
    <a target='_blank' onClick={onClick} className={`${classes[className]}`} {...props}>
      <button className={classes.resetButton}>{text || children}</button>
    </a>
  );
};

export default Button;
