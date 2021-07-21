import React from 'react';

import LayoutHFC from '../../common/layoutComponents/LayoutHFC';
import SignupContent from '../components/SignupContent';

const Signup = () => {
  return (
    <div className="page page-layout">
      <LayoutHFC
        HeaderComponents={null}
        ContentComponents={<SignupContent />}
        FooterComponents={null}
      />
    </div>
  );
};

export default Signup;
