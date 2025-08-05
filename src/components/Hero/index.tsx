import { motion } from 'framer-motion';
import styles from './style.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>
              Expert Auto Electrical & Mechanical Services in Sydney
            </h1>
            <p className={styles.heroSubtitle}>
              Trusted by Sydney drivers for over 30 years. Quality service for European, 4WD & Japanese vehicles.
            </p>
            <div className={styles.heroButtons}>
              <motion.a
                href="tel:97905361"
                className={`btn ${styles.heroBtn}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
              <motion.a
                href="#contact"
                className={`btn btn-outline ${styles.heroBtn}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroImage}></div>
    </section>
  );
};

export default Hero;