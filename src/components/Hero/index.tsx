import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTools, FaChevronDown } from 'react-icons/fa';
import { FaCarSide, FaGaugeHigh, FaOilCan, FaSprayCan } from 'react-icons/fa6';
import styles from './style.module.css';

const Hero = () => {
  const services = [
    { icon: <FaCarSide />, name: 'Detailing' },
    { icon: <FaGaugeHigh />, name: 'Performance' },
    { icon: <FaOilCan />, name: 'Maintenance' },
    { icon: <FaSprayCan />, name: 'Protection' }
  ];

  return (
    <section id="home" className={styles.hero}>
      {/* Background with gradient overlay */}
      <div className={styles.heroBackground}></div>
      
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          {/* Animated headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine}>Precision.</span>
              <span className={styles.titleLine}>Performance.</span>
              <span className={styles.titleLine}>Perfection.</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We bring Formula 1 standards to your driveway.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className={`${styles.heroBtn} ${styles.primaryBtn}`}
              whileHover={{ y: -3, boxShadow: '0 10px 20px rgba(26, 115, 232, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt className={styles.btnIcon} />
              Book an Appointment
            </motion.a>
            <motion.a
              href="#services"
              className={`${styles.heroBtn} ${styles.secondaryBtn}`}
              whileHover={{ y: -3, boxShadow: '0 10px 20px rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTools className={styles.btnIcon} />
              Explore Our Services
            </motion.a>
          </motion.div>

          {/* Service icons */}
          <motion.div
            className={styles.serviceIcons}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceIcon}
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={styles.iconWrapper}>{service.icon}</div>
                <span>{service.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;