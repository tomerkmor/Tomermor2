import React from "react";
import styles from "./Social.module.css"; // Import your CSS file

const Social: React.FC = () => {
  return (
    <div className={styles.socialIcons}> {/* Use the styles object for CSS module */}
      <a
        href="https://www.linkedin.com/in/tomermor/"
        target="_blank"
        rel="noopener noreferrer" // Helps with security and performance
        aria-label="LinkedIn"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="linkedin-in"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="30"
          height="30"
          className={styles.socialIcon} // Use the styles object for CSS module
        >
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          ></path>
        </svg>
      </a>

      <a
        href="https://github.com/tomerkmor"
        target="_blank"
        rel="noopener noreferrer" // Helps with security and performance
        aria-label="GitHub"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="30"
          height="30"
          className={styles.socialIcon} // Use the styles object for CSS module
        >
          <path
            fill="currentColor"
            d="M320 0C143.2 0 0 143.2 0 320c0 141.4 91.5 261.3 218.2 303.2 16 2.9 21.8-6.9 21.8-15.4 0-7.6-.3-30.6-.5-55.4-89.2 19.5-108.1-43.1-108.1-43.1-14.6-37.1-35.7-46.9-35.7-46.9-29.2-19.9 2.2-19.5 2.2-19.5 32.3 2.3 49.3 33.1 49.3 33.1 28.7 49.1 75.3 34.9 93.5 26.7 2.9-20.8 11.2-34.9 20.4-42.9-72.2-8.2-148.4-36.1-148.4-160.7 0-35.5 12.8-64.5 33.8-87.2-3.4-8.2-14.6-41.1 3.2-85.5 0 0 27.2-8.7 89.2 33.2 25.8-7.2 53.5-10.8 81-10.8 27.5 0 55.2 3.6 81 10.8 62-41.9 89.2-33.2 89.2-33.2 17.8 44.4 6.6 77.3 3.2 85.5 21 22.7 33.8 51.7 33.8 87.2 0 124.8-76.3 152.5-148.6 160.6 11.5 9.9 21.7 29.4 21.7 59.4 0 42.9-.4 77.6-.4 88.1 0 8.5 5.8 18.4 21.8 15.4C548.5 581.3 640 461.4 640 320 640 143.2 496.8 0 320 0z"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Social;
