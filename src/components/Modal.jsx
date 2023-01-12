import React from "react";
import "../styles/Modal.css";
import { Link } from 'react-router-dom';

function Modal({ setModalOpen, closeModal}) {
  return (
    <div className="modal__background">
      <div className="modal__container">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
                setModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>¡Gracias por completar el formulario!</h1>
        </div>
        <div className="body">
          <p>¿Quieres ver los datos recopilados?</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
                closeModal(true);
            }}
            id="cancelBtn"
          >
            Cerrar
          </button>
          <Link to='listdata'>
            <button>Ver datos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;