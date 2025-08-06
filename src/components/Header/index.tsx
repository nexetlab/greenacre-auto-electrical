import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaTools, FaInfoCircle, FaHome, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import styles from './style.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: 'home', icon: <FaHome /> },
    { name: 'Services', path: 'services', icon: <FaTools /> },
    { name: 'About', path: 'about', icon: <FaInfoCircle /> },
    { name: 'Contact', path: 'contact', icon: <FaPhoneAlt /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if we're currently on the homepage
  const isHomePage = location.pathname === '/' || location.pathname === '';

  // Handle logo click - navigate to home
  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Handle navigation click
  const handleNavClick = (sectionPath: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionPath);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionPath);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Handle CTA button click
  const handleCtaClick = () => {
    handleNavClick('contact');
  };

  return (
    <motion.header 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.container}>
        
        {/* Logo Section */}
        <motion.div 
          className={styles.logoSection}
          onClick={handleLogoClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className={styles.logoIcon}>
            <img 
              src="/images/logo.png" 
              alt="Greenacre Auto Electrical Logo" 
              className={styles.logoImage}
            />
          </div>
          <div className={styles.logoText}>
            <h1 className={styles.brandName}>GREENACRE</h1>
            <span className={styles.tagline}>AUTO ELECTRICAL</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <div className={styles.navLinks}>
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name}
                className={styles.navItem}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {isHomePage ? (
                  <ScrollLink
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={styles.navLink}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={styles.navLink}
                  >
                    {item.name}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.ctaSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {isHomePage ? (
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className={styles.ctaButton}
              >
                BOOK NOW
              </ScrollLink>
            ) : (
              <button
                onClick={handleCtaClick}
                className={styles.ctaButton}
              >
                BOOK NOW
              </button>
            )}
          </motion.div>
        </div>

        {/* Mobile Menu Toggle - Only hamburger icon */}
        <button
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <HiOutlineMenuAlt3 />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {/* Close button inside the menu */}
              <motion.button
                className={styles.mobileCloseButton}
                onClick={toggleMenu}
                aria-label="Close menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <FaTimes />
              </motion.button>

              <div className={styles.mobileNavList}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className={styles.mobileNavItem}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    {isHomePage ? (
                      <ScrollLink
                        to={item.path}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className={styles.mobileNavLink}
                        onClick={toggleMenu}
                      >
                        <span className={styles.mobileIcon}>{item.icon}</span>
                        {item.name}
                      </ScrollLink>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.path)}
                        className={styles.mobileNavLink}
                      >
                        <span className={styles.mobileIcon}>{item.icon}</span>
                        {item.name}
                      </button>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  className={styles.mobileCtaItem}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <a
                    href="tel:97905361"
                    className={styles.mobileCtaLink}
                  >
                    <span className={styles.mobileIcon}><FaPhoneAlt /></span>
                    CALL NOW
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;