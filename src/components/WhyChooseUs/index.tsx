import { motion } from 'framer-motion';
import styles from './style.module.css';

const benefits = [
  {
    title: 'Upfront Estimates',
    description: 'No hidden costs - we provide transparent pricing before any work begins.',
    icon: '💰'
  },
  {
    title: 'OEM or Better Quality Parts',
    description: 'We use only the highest quality parts that meet or exceed manufacturer standards.',
    icon: '🔩'
  },
  {
    title: '30+ Years Experience',
    description: 'Decades of expertise working with all vehicle makes and models.',
    icon: '🛠️'
  },
  {
    title: 'All Major Brands Covered',
    description: 'From European luxury to Japanese reliability, we service them all.',
    icon: '🚗'
  },
  {
    title: '6 Days a Week',
    description: 'Open Monday to Saturday for your convenience.',
    icon: '⏱️'
  },
  {
    title: 'Multiple Payment Options',
    description: 'We accept EFTPOS, cash, cheques, and all major credit cards.',
    icon: '💳'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className={`section ${styles.whySection}`}>
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className={styles.benefitCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;