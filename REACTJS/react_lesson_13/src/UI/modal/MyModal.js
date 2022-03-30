import React from "react";
import classes from "./css/MyModal.module.css";

function MyModal({ children, showModal, setModal }) {
  const modalClasses = [classes.myModal];
  if (showModal) {
    modalClasses.push(classes.active);
  }
  return (
    <div className={modalClasses.join(" ")} onClick={() => setModal(false)}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default MyModal;
