import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalContainer">
        {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };