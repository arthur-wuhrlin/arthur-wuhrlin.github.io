import React from 'react';
// useLanguage import removed
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  // useLanguage() call removed
  const location = useLocation();

  return (
    <nav className="horizontal-bar" id="home-bar">
      <ul className="button-container">
        <li className={`home ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/">Home</Link> {/* Text updated */}
        </li>
        <li className={`projects ${location.pathname === '/projects' ? 'active' : ''}`}>
          <Link to="/projects">Projects</Link> {/* Text updated */}
        </li>
        <li className={`blog ${location.pathname === '/blog' ? 'active' : ''}`}>
          <Link to="/blog">Blog</Link> {/* Text updated */}
        </li>
        <li className={`about ${location.pathname === '/about' ? 'active' : ''}`}>
          <Link to="/about">About</Link> {/* Text updated */}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
