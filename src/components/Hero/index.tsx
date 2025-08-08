import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTools, FaChevronDown } from 'react-icons/fa';
import { FaCarSide, FaGaugeHigh, FaOilCan, FaSprayCan } from 'react-icons/fa6';
import styles from './style.module.css';

const Hero = () => {
  

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Single scroll handler for the arrow - tries services section first, then fallback to viewport scroll
  const handleArrowClick = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      // If services section exists, scroll to it
      servicesElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      // Fallback: scroll down by one viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Background */}
      <div className={styles.heroBackground}></div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>

          {/* Motto */}
          <motion.p
            className={styles.heroMotto}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Driven by Trust. Powered by Precision.
          </motion.p>

          {/* Headline */}
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Greenacre Auto Electrical
          </motion.h1>

          {/* Short Description */}
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Reliable diagnostics, repairs, and maintenance for all vehicles. Trusted by locals, powered by years of hands-on experience.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className={`${styles.heroBtn} ${styles.primaryBtn}`}
              whileHover={{ y: -3, boxShadow: '0 10px 20px rgba(26, 115, 232, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt className={styles.btnIcon} />
              Book an Appointment
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('services')}
              className={`${styles.heroBtn} ${styles.secondaryBtn}`}
              whileHover={{ y: -3, boxShadow: '0 10px 20px rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTools className={styles.btnIcon} />
              Explore Our Services
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed with single click handler */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={handleArrowClick}
        style={{ cursor: 'pointer' }}
      >
        <div className={styles.arrow}>
          <FaChevronDown />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;