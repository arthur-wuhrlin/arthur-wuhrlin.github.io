import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const FooterBar = () => {
  const { theme } = useTheme(); // toggleTheme removed
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="horizontal-bar">
      <div className="button-container" id="social-icons">
        <a href="https://www.linkedin.com/in/arthur-wuhrlin" target="_blank" className="icon-link">
          <img src="/img/linkedin_logo.svg" alt="LinkedIn" className="icon" />
        </a>
        <a href="https://github.com/JudasBricot" target="_blank" className="icon-link">
          <img src="/img/github_logo.svg" alt="GitHub" className="icon" />
        </a>
        <a href="mailto:arthur.wuhrlin@nus.edu.sg" target="_blank" id="email" className="icon-link">
          <img src="/img/email_logo.svg" alt="Mail" className="icon" />
        </a>
      </div>
      <div className="button-container" id="controls">
        {/* Theme toggle button removed */}
        <button id="language-toggle" onClick={toggleLanguage}>
          {language.toUpperCase() === 'EN' ? 'FR' : 'EN'}
        </button>
      </div>
    </div>
  );
};

export default FooterBar;
