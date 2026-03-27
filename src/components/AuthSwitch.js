import React from 'react';

const AuthSwitch = ({ currentView, setCurrentView }) => {
  return (
    <div className="signup-box glass-panel">
      {currentView === 'login' && (
        <>
          {/* Desktop specific signup info */}
          <p className="desktop-signup-text">
            Don't have an account?{' '}
            <a 
              href="https://www.instagram.com/accounts/emailsignup/?next=" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Sign up
            </a>
          </p>

          {/* Mobile specific signup section completely anchored at bottom */}
          <div className="mobile-signup-bottom">
            <a 
              href="https://www.instagram.com/accounts/emailsignup/?next=" 
              target="_blank" 
              rel="noopener noreferrer"
              className="create-account-btn-mobile"
            >
              Create new account
            </a>
          </div>
        </>
      )}
      {currentView === 'forgotPassword' && (
        <p>
          <a 
            href="#!" 
            id="back-to-login" 
            onClick={(e) => { e.preventDefault(); setCurrentView('login'); }}
          >
            Back to login
          </a>
        </p>
      )}
    </div>
  );
};

export default AuthSwitch;
