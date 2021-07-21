import React from 'react';

import LandingHeader from '../components/LandingHeader';
import LayoutHFC from '../../common/layoutComponents/LayoutHFC';

const Landing = () => {
  return (
    <div className="page page-layout">
      <LayoutHFC
        HeaderComponents={<LandingHeader />}
        ContentComponents={null}
        FooterComponents={null}
      />
    </div>
  );
};

export default Landing;
