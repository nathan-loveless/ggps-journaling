import React from 'react';

import LayoutHFC from '../../common/layoutComponents/LayoutHFC';
import LoginContent from '../components/LoginContent';

const Login = () => {
  return (
    <div className="page page-layout">
      <LayoutHFC
        HeaderComponents={null}
        ContentComponents={<LoginContent />}
        FooterComponents={null}
      />
    </div>
  );
};

export default Login;
