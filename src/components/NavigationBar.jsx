import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <nav className="horizontal-bar" id="home-bar">
      <ul className="button-container">
        <li className={`home ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/">{t('nav.home')}</Link>
        </li>
        <li className={`projects ${location.pathname === '/projects' ? 'active' : ''}`}>
          <Link to="/projects">{t('nav.projects')}</Link>
        </li>
        <li className={`blog ${location.pathname === '/blog' ? 'active' : ''}`}>
          <Link to="/blog">{t('nav.blog')}</Link>
        </li>
        <li className={`about ${location.pathname === '/about' ? 'active' : ''}`}>
          <Link to="/about">{t('nav.about')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
