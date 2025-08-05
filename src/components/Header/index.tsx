import { useState, useEffect } from 'react';
import styles from './style.module.css';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Services', path: '#services' },
    { name: 'About', path: '#about' },
    { name: 'Why Us', path: '#why-choose-us' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContainer}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className={styles.logo}>
              <span className={styles.logoPrimary}>Greenacre</span>
              <span className={styles.logoSecondary}>Auto Electrical & Mechanical</span>
            </a>
          </motion.div>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
            <ul className={styles.navList}>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a href={link.path} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="tel:97905361" className={styles.phoneLink}>
              <span className={styles.phoneIcon}>📞</span>
              <span>9790 5361</span>
            </a>
          </motion.div>

          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
