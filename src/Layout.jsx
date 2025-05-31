import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationBar from './components/NavigationBar';
import FooterBar from './components/FooterBar';
import ThreeCanvas from './components/ThreeCanvas';

const Layout = ({ children, location }) => { // Destructure location here
  return (
    <>
      <div className="container-col">
        <NavigationBar />
        <div className="content"> {/* Regular div */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname} // This key is crucial
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
        <FooterBar />
      </div>
      <ThreeCanvas />
    </>
  );
};

export default Layout;
