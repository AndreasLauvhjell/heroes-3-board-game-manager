// Modal.js
import React from 'react';
import MysticalGarden from '../assets/images/gifs/MysticalGarden.gif'
import '../assets/styles/Modal.css';

function Modal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>yoo</p>
        <div>
          <img src={MysticalGarden} alt="" />
        </div>
        
        <p>Do you want to play music?</p>
        <button onClick={onClose} className="close-button">Accept</button>
        <button onClick={onClose} className="close-button">Decline</button>
      </div>
    </div>
  );
}

export default Modal;
