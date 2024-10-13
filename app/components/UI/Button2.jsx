import React from "react";
import classes from "./Button2.module.css";

const Button = ({ children, className = '', text, onClick = () => {}, ...props }) => {
  return (
    <a onClick={onClick} className={`${classes[className]}`} {...props}>
      {text || children}
    </a>
  );
};

export default Button;
