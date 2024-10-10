import ContactForm from "./ContactForm";
import styles from "./Projects.module.css";
const Contact: React.FC = () => {
  return (
    <section style={{margin:"2rem"}} id="contact">
      <h2>Keep in touch.</h2>
      <p>
        If you have any questions or just want to say hi, feel free to reach out
        to me.
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
