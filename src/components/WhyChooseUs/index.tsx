import { motion } from 'framer-motion';
import { 
  FaDollarSign,
  FaCog,
  FaAward,
  FaCar,
  FaClock,
  FaCreditCard,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';
import styles from './style.module.css';

const benefits = [
  {
    title: 'Upfront Estimates',
    description: 'No hidden costs - we provide transparent pricing before any work begins.',
    icon: <FaDollarSign />,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'OEM or Better Quality Parts',
    description: 'We use only the highest quality parts that meet or exceed manufacturer standards.',
    icon: <FaCog />,
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    title: '30+ Years Experience',
    description: 'Decades of expertise working with all vehicle makes and models.',
    icon: <FaAward />,
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    title: 'All Major Brands Covered',
    description: 'From European luxury to Japanese reliability, we service them all.',
    icon: <FaCar />,
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    title: '6 Days a Week',
    description: 'Open Monday to Saturday for your convenience.',
    icon: <FaClock />,
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    title: 'Multiple Payment Options',
    description: 'We accept EFTPOS, cash, cheques, and all major credit cards.',
    icon: <FaCreditCard />,
    gradient: 'from-cyan-500 to-blue-600'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className={`section ${styles.whySection}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <div className={styles.titleWrapper}>
            <FaStar className={styles.titleIcon} />
            <h2 className="section-title">Why Choose Us</h2>
            <FaStar className={styles.titleIcon} />
          </div>
          <p className={styles.sectionSubtitle}>
            Discover what sets us apart from the competition and why thousands of Sydney drivers trust us with their vehicles
          </p>
        </motion.div>

        <div className={styles.benefitsContainer}>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <motion.div 
                      className={`${styles.benefitIcon} ${styles[benefit.gradient]}`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <div className={styles.decorativeElements}>
                      <div className={styles.glowEffect}></div>
                      <div className={styles.sparkle1}></div>
                      <div className={styles.sparkle2}></div>
                    </div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDescription}>{benefit.description}</p>
                  </div>

                  <div className={styles.checkMark}>
                    <FaCheckCircle />
                  </div>
                </div>

                <div className={styles.cardGlow}></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.statsSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>30+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>1000+</div>
                <div className={styles.statLabel}>Happy Customers</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Quality Guarantee</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>6</div>
                <div className={styles.statLabel}>Days Open</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;