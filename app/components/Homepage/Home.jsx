import React, { forwardRef, useEffect, useState } from "react";
import classes from "./Home.module.css";
import tomerImg from "@/public/profileImg.jpeg";
import Image from "next/image";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";

const Home = forwardRef((props, ref) => {
  const [message, setMessage] = useState(null);
  const handleImageClick = () => {
    setMessage("🎉 Hey! You've clicked on my image! 😜");
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleDownload = () => {
    const cvUrl = "/Tomer Mor - CV.pdf";
    const a = document.createElement("a");
    a.href = cvUrl;
    a.download = "TomerMorCV.pdf";
    a.click();
  };
  return (
    <section ref={ref} id="home" className={classes.container}>
      <div className={classes.leftSide}>
        <h1 className="mainTitle">Hi, I'm Tomer</h1>
        <div className={classes.titles}>
          <h3>Web Developer</h3>
          <h3>C.S - Open University Graduate</h3>
        </div>
        <p>I'm a quick learner, eager to learn, and passionate about coding!</p>
        <Button2
          text="Download CV"
          onClick={handleDownload}
          className={"button"}
        />
      </div>
      <div className={classes.rightSide}>
        <Image
          src={tomerImg}
          alt="Profile Image"
          className={classes.image}
          onClick={handleImageClick}
        />
      </div>

      {/* Display message if it's set */}
      {message && (
        <div className={classes.message} style={{ top: "80px" }}>
          <p>{message}</p>
        </div>
      )}
    </section>
  );
});

export default Home;
