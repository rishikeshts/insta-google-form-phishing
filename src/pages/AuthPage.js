import React, { useState } from 'react';
import instagramLogo from '../assets/instagram.png';
import LoginForm from '../components/LoginForm';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import PromoContent from '../components/PromoContent';
import LoggedOutPopup from '../components/LoggedOutPopup';
import Footer from '../components/Footer';
import AuthSwitch from '../components/AuthSwitch';

const AuthPage = () => {
  const [currentView, setCurrentView] = useState('login'); // 'login', 'forgotPassword'

  return (
    <div className="app-container">
      {/* Ambient glowing background shapes */}
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>

      {/* Mobile Top Bar */}
      <div className="mobile-top-bar">
        <span className="language-selector">English (India) <span className="chevron-down"></span></span>
      </div>

      <main className="main-content">
        {currentView !== 'forgotPassword' && <PromoContent />}

        {/* Right Column - Forms */}
        <div className="right-column">
          <div className="login-box glass-panel">
            <div className="logo-container">
              <img src={instagramLogo} alt="Instagram" className="instagram-logo-img" />
            </div>

            {currentView === 'login' && <LoginForm setCurrentView={setCurrentView} />}
            {currentView === 'forgotPassword' && <ForgotPasswordForm setCurrentView={setCurrentView} />}
          </div>

          <AuthSwitch currentView={currentView} setCurrentView={setCurrentView} />
        </div>
      </main>

      <LoggedOutPopup />
      <div className="desktop-footer">
        <Footer />
      </div>
    </div>
  );
};

export default AuthPage;
