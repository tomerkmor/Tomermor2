import styles from "./Welcome.module.css";

const Welcome: React.FC = () => {
  return (
    <section className={styles["container"]} id="home">
      <h1 className={styles["title"]}>Tomer Mor.</h1>
      <p className={styles["sub-title"]}>Passionate Frontend Developer</p>
      <p className={styles["description"]}>
        Frontend Developer who transforms ideas into stunning web applications
        by day and spending quality time with my family or hitting the gym by
        night. I believe in balance—crafting code and cultivating strength.
      </p>
    </section>
  );
};

export default Welcome;
