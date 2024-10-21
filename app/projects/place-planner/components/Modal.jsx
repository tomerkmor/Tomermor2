import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import classes from './Modal.module.css';

const Modal = ({ open, children, onClose }) => {
  const dialog = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure this runs only on the client side
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (open && dialog.current) {
      dialog.current.showModal();
    } else if (dialog.current) {
      dialog.current.close();
    }
  }, [open]);

  // Only proceed if mounted, ensuring this is client-side
  if (!mounted) return null;

  return createPortal(
    <dialog className={classes["modal"]} ref={dialog} onClose={onClose}>
      {open && children}
    </dialog>,
    document.getElementById("modal") // This element is created in RootLayout
  );
};

export default Modal;
