import React from "react";
import classes from "./Button2.module.css";

const Button = ({ children, className = '', text, onClick = () => {}, ...props }) => {
  return (
    <button onClick={onClick} className={`${classes[className]}`} {...props}>
      {text || children}
    </button>
  );
};

export default Button;
