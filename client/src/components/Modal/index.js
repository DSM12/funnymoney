import React from "react";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = "modal display-block";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

export default Modal;