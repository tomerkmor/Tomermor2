import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setSuccessMessage('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSuccessMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className={styles['contact-form']} onSubmit={handleSubmit}>
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
        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </>
  );
};

export default ContactForm;
