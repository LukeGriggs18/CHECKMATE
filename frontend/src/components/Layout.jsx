// Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <div className="relative min-h-screen flex flex-row">
                <Sidebar className="z-10" />
                <div className="bg-darkgrey flex-1">
                    {children}
                </div>
            </div>

        </>
    );
};

export default Layout;
