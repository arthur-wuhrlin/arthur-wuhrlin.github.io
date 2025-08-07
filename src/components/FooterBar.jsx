import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/components/FooterBar.module.css';

const FooterBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.footerBar}>
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/arthur-wuhrlin" target="_blank" className={styles.iconLink}>
          <img src="/img/linkedin_logo.svg" alt="LinkedIn" className={styles.icon} />
        </a>
        <a href="https://github.com/JudasBricot" target="_blank" className={styles.iconLink}>
          <img src="/img/github_logo.svg" alt="GitHub" className={styles.icon} />
        </a>
        <a href="mailto:arthur.wuhrlin@nus.edu.sg" target="_blank" id="email" className={styles.iconLink}>
          <img src="/img/email_logo.svg" alt="Mail" className={styles.icon} />
        </a>
      </div>
      <div className={styles.controls}>
        <button className="button" onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default FooterBar;
