import { useEffect } from "react";
import ProgressBar from "./ProgressBar";
import classes from './DeleteCofirmation.module.css'

const TIMER = 5000;

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div id={classes["delete-confirmation"]}>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id={classes["bottom-line"]}>
        <ProgressBar timer={TIMER} />
        <div id={classes["confirmation-actions"]}>
          <button onClick={onCancel} className={classes["button-text"]}>
            No
          </button>
          <button onClick={onConfirm} className={classes["button"]}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
