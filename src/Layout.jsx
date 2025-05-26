import React from 'react';
import { motion } from 'framer-motion';
import NavigationBar from './components/NavigationBar';
import FooterBar from './components/FooterBar';
import ThreeCanvas from './components/ThreeCanvas';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container-col">
        <NavigationBar />
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
        <FooterBar />
      </div>
      <ThreeCanvas />
    </>
  );
};

export default Layout;
