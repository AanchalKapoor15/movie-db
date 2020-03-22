import React from 'react';

import DashboardStyles from './dashboard-styles';
import Logo from '../assets/logo-icon';
import { LineIcon } from '../assets/line-icon';

export const Header = () => {
    return (
        <div>
            <div style={DashboardStyles.HeaderInnerDiv}>
                <Logo
                    width="100px"
                    height="100px" />
                {/* <div style={{ position: 'absolute' }}>
                    <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="114.551" width="162" height="4" rx="2" transform="rotate(-45 0 114.551)" fill="#01D277" fill-opacity="0.83" />
                    </svg>
                </div>
                <div style={{ position: 'absolute' }}>
                    <svg width="110" height="118" viewBox="0 0 110 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-8" y="114.551" width="162" height="4" rx="2" transform="rotate(-45 -8 114.551)" fill="#01D277" fill-opacity="0.83" />
                    </svg>
                </div>
                <div style={{ position: 'absolute' }}>
                    <svg width="118" height="52" viewBox="0 0 118 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="48.5513" width="162" height="4" rx="2" transform="rotate(-45 0 48.5513)" fill="#01D277" fill-opacity="0.83" />
                    </svg>
                </div>
                <div style={{ position: 'absolute' }}>
                    <svg width="118" height="25" viewBox="0 0 118 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="21.5513" width="162" height="4" rx="2" transform="rotate(-45 0 21.5513)" fill="#01D277" fill-opacity="0.83" />
                    </svg>
                </div>
                <div style={{ position: 'absolute' }}>
                    <svg width="107" height="70" viewBox="0 0 107 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="66.5513" width="162" height="4" rx="2" transform="rotate(-45 0 66.5513)" fill="#01D277" fill-opacity="0.83" />
                    </svg>
                </div>
                <div style={{ position: 'absolute' }}>
                    <svg width="96" height="34" viewBox="0 0 96 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="30.5513" width="162" height="4" rx="2" transform="rotate(-45 0 30.5513)" fill="#01D277" fill-opacity="0.83" />
                    </svg>
                </div> */}
            </div>
        </div>
    );
}

export default Header;