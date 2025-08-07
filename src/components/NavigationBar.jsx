import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/components/NavigationBar.module.css';

const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navigationBar}>
      <ul className={styles.buttonContainer}>
        <li className={`${styles.navItem} ${location.pathname === '/' ? styles.active : ''}`}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={`${styles.navItem} ${location.pathname === '/projects' ? styles.active : ''}`}>
          <Link to="/projects" className={styles.navLink}>Projects</Link>
        </li>
        <li className={`${styles.navItem} ${location.pathname === '/blog' ? styles.active : ''}`}>
          <Link to="/blog" className={styles.navLink}>Blog</Link>
        </li>
        <li className={`${styles.navItem} ${location.pathname === '/about' ? styles.active : ''}`}>
          <Link to="/about" className={styles.navLink}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
