import React from "react";

import classes from './Input.module.css'
const Input = ({ label, id, error, ...props }) => {
  return (
    <div className={`${classes.control} ${classes["no-margin"]}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className={classes["control-error"]}>{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
