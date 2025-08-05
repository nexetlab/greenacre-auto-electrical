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
            <div className={styles.imageWrapper}></div>
          </motion.div>
          
          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Us</h2>
            <p className={styles.aboutText}>
              With over <strong>30 years of experience</strong> in the automotive industry, Greenacre Auto Electrical & Mechanical Services has been the trusted choice for Sydney drivers. Our team of certified technicians specializes in European, 4WD, and Japanese vehicles.
            </p>
            <p className={styles.aboutText}>
              We pride ourselves on delivering <strong>honest, reliable, and high-quality</strong> service to every customer. Whether it's a routine maintenance check or a complex electrical issue, we treat your vehicle with the care it deserves.
            </p>
            <p className={styles.aboutText}>
              Our commitment to excellence and customer satisfaction has made us a <strong>leading auto electrical and mechanical service provider</strong> in the Sydney area.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;