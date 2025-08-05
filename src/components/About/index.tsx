import { motion } from 'framer-motion';
import styles from './style.module.css';

const About = () => {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.aboutContainer}>
          <motion.div
            className={styles.aboutImage}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>
          
          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.contentCard}>
              <h2 className={`section-title ${styles.sectionTitle}`}>About Us</h2>
              <div className={styles.titleUnderline}></div>
              
              <p className={styles.aboutText}>
                With over <span className={styles.highlight}>30 years of experience</span> in the automotive industry, Greenacre Auto Electrical & Mechanical Services has been the trusted choice for Sydney drivers. Our team of certified technicians specializes in European, 4WD, and Japanese vehicles.
              </p>
              
              <p className={styles.aboutText}>
                We pride ourselves on delivering <span className={styles.highlight}>honest, reliable, and high-quality</span> service to every customer. Whether it's a routine maintenance check or a complex electrical issue, we treat your vehicle with the care it deserves.
              </p>
              
              <p className={styles.aboutText}>
                Our commitment to excellence and customer satisfaction has made us a <span className={styles.highlight}>leading auto electrical and mechanical service provider</span> in the Sydney area.
              </p>
              
              <div className={styles.statsContainer}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>30+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1000+</span>
                  <span className={styles.statLabel}>Happy Customers</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Quality Service</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;