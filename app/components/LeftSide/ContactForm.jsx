import { useState } from "react";
import styles from "./ContactForm.module.css";
import Modal from "../UI/Modal";
import Button from '../UI/Button'
const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setSuccessMessage("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      setShowModal(true); // Show the modal on success
    }
  };

  const handleClose = () => {
    setSuccessMessage("");
    setShowModal(false); // Close modal when the user dismisses it
  };

  return (
    <>
      {/* Render the form regardless of modal state */}
      <form className={styles["contact-form"]} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className={`${styles.input} ${styles.description}`}
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          spellCheck="false"
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </Button>

      </form>


      {successMessage && (
        <Modal isOpen={showModal} onClose={handleClose}>
          <p className={styles["error-message"]}>Something went wrong..</p>
          <h2 className={styles["modal-error-message"]}>{successMessage}</h2>
          <button className={styles["modal-error-button"]} onClick={handleClose}>
            Close
          </button>
        </Modal>
      )}

      {/* Only show the modal if showModal is true */}
      {showModal && successMessage === "Message sent successfully!" && (
        <Modal isOpen={showModal} onClose={handleClose}>
          <p className={styles["thank-you-message"]}>Thank You.</p>
          <h2 className={styles["modal-message"]}>{successMessage}</h2>
          <button className={styles["modal-button"]} onClick={handleClose}>
            Close
          </button>
        </Modal>
      )}
    </>
  );
};

export default ContactForm;
