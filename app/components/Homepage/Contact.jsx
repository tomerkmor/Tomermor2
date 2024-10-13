import { forwardRef, useState } from "react";
import ContactForm from "./ContactForm";
import classes from "./Contact.module.css";
import Footer from "./Footer";
import Button2 from "../UI/Button2";
import Modal from "../UI/Modal";

const Contact = forwardRef((props, ref) => {
  const [openForm, setOpenForm] = useState(false);
  const toggleForm = () => {
    setOpenForm((prevState) => !prevState);
  };
  return (
    <section ref={ref} id="contact" className={classes.section}>
      <div className={classes.container}>
        <h2 className="mainTitle">Keep in touch.</h2>
        <p>
          If you have any questions or just want to say hi, feel free to reach
          out to me.
        </p>
        <Button2 text="Reach Out" className="neon" onClick={toggleForm} />
      {openForm && <ContactForm />}
      </div>
      <Footer openForm={openForm} />
    </section>
  );
});

export default Contact;
