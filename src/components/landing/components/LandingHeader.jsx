import React from 'react';
import { Button } from 'antd';

import '../../../antd/styles/landingHeader.css';

const LandingHeader = () => {
  return (
    <div className="header-container">
      <div className="auth-button-group">
        <Button
          className="login-sign-up-button"
          href="/signup"
          className="auth-button"
        >
          Signup
        </Button>
        <Button
          className="login-sign-up-button"
          href="/login"
          className="auth-button"
        >
          Login
        </Button>
      </div>

      <div className="main-banner"></div>
    </div>
  );
};

export default LandingHeader;
