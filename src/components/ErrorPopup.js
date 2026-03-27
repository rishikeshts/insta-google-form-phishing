import React from 'react';
import { createPortal } from 'react-dom';

const ErrorPopup = ({ onClose, title, message }) => {
  const popupContent = (
    <div className="popup-overlay">
      <div className="popup-modal" style={{ textAlign: 'center' }}>
        <div 
          className="error-icon-container" 
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            border: '3px solid #ed4956', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}
        >
          <span style={{ fontSize: '30px', color: '#ed4956', fontWeight: 'bold' }}>!</span>
        </div>
        <h3 style={{ marginTop: 0 }}>{title || 'Incorrect Password'}</h3>
        <p>{message || 'The password you entered is incorrect. Please try again.'}</p>
        <button onClick={onClose} className="premium-btn" style={{ marginTop: '10px' }}>
          Try Again
        </button>
      </div>
    </div>
  );

  return createPortal(popupContent, document.body);
};

export default ErrorPopup;
