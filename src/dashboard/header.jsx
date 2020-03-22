import React from 'react';

import DashboardStyles from './dashboard-styles';
import Logo from '../assets/logo-icon';

export const Header = () => {
    return (
        <div>
            <div style={DashboardStyles.HeaderInnerDiv}>
                <Logo
                    width="100px"
                    height="100px" />
            </div>
        </div>
    );
}

export default Header;