import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import styles from './Modal.module.css'

const Modal = ({ isOpen, children, className = "", onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog) {
      if (isOpen) {
        dialog.showModal(); 
      } else {
        dialog.close(); 
      }
    }
  }, [isOpen]);


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
