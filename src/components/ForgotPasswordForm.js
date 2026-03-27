import React, { useState } from 'react';

const ForgotPasswordForm = ({ setCurrentView }) => {
  const [resetEmail, setResetEmail] = useState('');
  const isResetValid = resetEmail.length > 0;

  return (
    <div className="forgot-password-container">
      <div className="lock-icon-container">
        <svg aria-label="Trouble logging in?" fill="currentColor" height="96" role="img" viewBox="0 0 96 96" width="96"><circle cx="48" cy="48" fill="transparent" r="47" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M64 43.146v4.615A10.25 10.25 0 0 1 53.75 58h-11.5A10.25 10.25 0 0 1 32 47.761v-4.615A10.25 10.25 0 0 1 42.25 32.9h11.5A10.25 10.25 0 0 1 64 43.146Z" fill="transparent" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M48 43.868a2.316 2.316 0 1 1-2.316 2.316A2.316 2.316 0 0 1 48 43.868Z" fill="currentColor" stroke="currentColor"></path><path d="M48 48.5v4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M57.696 32.9V26c0-6-4.524-10-9.696-10s-9.696 4-9.696 10v6.9" fill="transparent" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
      </div>
      <h4 className="forgot-password-title">Trouble logging in?</h4>
      <p className="forgot-password-desc">Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
      <form className="login-form">
        <div className="input-container">
          <span className={`input-label ${resetEmail ? 'active' : ''}`}>Email, Phone, or Username</span>
          <input type="text" className={`login-input ${resetEmail ? 'has-value' : ''}`} value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} />
        </div>
        <button type="submit" className="login-btn premium-btn" disabled={!isResetValid}>
          Send login link
        </button>
      </form>
      <div className="divider">
        <div className="line"></div>
        <div className="or-text">OR</div>
        <div className="line"></div>
      </div>
      <div className="create-new-account-link">
        <a 
          href="https://www.instagram.com/accounts/emailsignup/?next=" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Create new account
        </a>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
