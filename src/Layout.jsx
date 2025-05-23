import React from 'react';
import NavigationBar from './components/NavigationBar';
import FooterBar from './components/FooterBar';
import ThreeCanvas from './components/ThreeCanvas';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container-col">
        <NavigationBar />
        <div className="content">
          {children}
        </div>
        <FooterBar />
      </div>
      <ThreeCanvas />
    </>
  );
};

export default Layout;
