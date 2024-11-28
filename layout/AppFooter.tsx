/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            {/* <img src={`/recommant/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Logo" height="20" className="mr-2" /> */}
            <img src={`/recommant/layout/images/LogoRecommants.png`} alt="Logo" height="20" className="mr-2" />
            @2024 by
            <span className="font-medium ml-2">ERP MSU</span>
        </div>
    );
};

export default AppFooter;
