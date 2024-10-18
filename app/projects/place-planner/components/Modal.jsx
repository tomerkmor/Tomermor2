import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import classes from './Modal.module.css'

const Modal = ({ open, children, onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className={classes["modal"]} ref={dialog} onClose={onClose}>
      {open && children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
