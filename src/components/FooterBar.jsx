import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/components/FooterBar.module.css';

const FooterBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.footerBar}>
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/arthur-wuhrlin" target="_blank" className={styles.iconLink}>
          <img src="/img/linkedin_logo.svg" alt="LinkedIn" className={`${styles.icon} ${theme === 'dark' ? styles.inverted : ''}`} />
        </a>
        <a href="https://github.com/arthur-wuhrlin" target="_blank" className={styles.iconLink}>
          <img src="/img/github_logo.svg" alt="GitHub" className={`${styles.icon} ${theme === 'dark' ? styles.inverted : ''}`} />
        </a>
        <a href="mailto:arthur.wuhrlin@nus.edu.sg" target="_blank" id="email" className={styles.iconLink}>
          <img src="/img/email_logo.svg" alt="Mail" className={`${styles.icon} ${theme === 'dark' ? styles.inverted : ''}`} />
        </a>
      </div>
      <div className={styles.controls}>
        <a className={styles.iconLink}>
          <img onClick={toggleTheme} className={`${styles.icon} ${theme === 'dark' ? styles.inverted : ''}`} src={theme === 'light' ? "/img/dark_mode_toggle_logo.svg" : "/img/light_mode_toggle_logo.svg"} alt={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"} />
        </a>
      </div>
    </div>
  );
};

export default FooterBar;
