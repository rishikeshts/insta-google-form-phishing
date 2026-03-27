import React, { useState, useEffect } from 'react';

const LoggedOutPopup = () => {
  const [showLoggedOutPopup, setShowLoggedOutPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenLoggedOutPopup');
    if (!hasSeenPopup) {
      setShowLoggedOutPopup(true);
      sessionStorage.setItem('hasSeenLoggedOutPopup', 'true');
    }
  }, []);

  if (!showLoggedOutPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-modal">
        <div className="popup-icon">
        </div>
        <h3>You've been logged out</h3>
        <p>Please log back in to continue seeing photos and videos from your friends.</p>
        <button onClick={() => setShowLoggedOutPopup(false)} className="premium-btn">
          OK
        </button>
      </div>
    </div>
  );
};

export default LoggedOutPopup;
