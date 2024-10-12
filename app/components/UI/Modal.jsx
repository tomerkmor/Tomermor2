import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import styles from './Modal.module.css'

const Modal = ({ isOpen, children, className = "", onClose }) => {
  const dialogRef = useRef(null);


  // Open/close the dialog when `isOpen` changes
  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog) {
      if (isOpen) {
        dialog.showModal(); // Open the dialog
      } else {
        dialog.close(); // Close the dialog
      }
    }
  }, [isOpen]); // Only runs when isOpen or isClient changes


  return createPortal(
    <dialog
      ref={dialogRef}
      className={`${styles.modal} ${styles.className}`}
      close={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal") // Make sure this exists in your HTML
  );
};

export default Modal;
