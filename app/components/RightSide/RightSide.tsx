import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./RightSide.module.css"; // Assuming you're using CSS modules
import Social from "./Social";
import tomerImg from "@/public/profileImg.jpeg";

const RightSide: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null); // Store one message, can be null initially

  const handleImageClick = () => {
    // Set message when image is clicked
    setMessage("🎉 Hey! You've clicked on my image! 😜");
  };

  useEffect(() => {
    if (message) {
      // Set a timeout to remove the message after 3 seconds
      const timer = setTimeout(() => {
        setMessage(null); // Clear the message after 3 seconds
      }, 3000);

      return () => clearTimeout(timer); // Cleanup if the component unmounts or message changes
    }
  }, [message]);

  return (
    <div className={styles.container}>
      <div className={styles["right-side"]}>
        <Image
          src={tomerImg}
          alt="Tomer's image"
          className={styles.mainImg}
          onClick={handleImageClick}
        />
        <Social />
      </div>

      {/* Display message if it's set */}
      {message && (
        <div className={styles.message} style={{ top: "80px" }}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default RightSide;
