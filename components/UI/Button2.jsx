import React from "react";
import classes from "./Button2.module.css";
import Link from "next/link";

const Button = ({
  children,
  className = "",
  text,
  href="",
  type = "",
  onClick = () => {},
  ...props
}) => {
  return (
    <>
      {type === "link" && (
        <Link href={href}
          onClick={onClick}
          className={`${classes[className]}`}
          {...props}
        >
          <button className={classes.resetButton}>{text || children}</button>
        </Link>
      )}

      {type !== "link" && (
        <a
          target="_blank"
          onClick={onClick}
          className={`${classes[className]}`}
          {...props}
        >
          <button className={classes.resetButton}>{text || children}</button>
        </a>
      )}
    </>
  );
};

export default Button;
