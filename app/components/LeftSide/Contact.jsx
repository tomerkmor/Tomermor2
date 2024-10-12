import { forwardRef } from "react";
import ContactForm from "./ContactForm";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} style={{ margin: "2rem" }} id="contact">
      <h2>Keep in touch.</h2>
      <p>
        If you have any questions or just want to say hi, feel free to reach out
        to me.
      </p>
      <ContactForm />
    </section>
  );
});

export default Contact;
