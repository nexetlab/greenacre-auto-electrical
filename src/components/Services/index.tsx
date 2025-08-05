import { motion } from 'framer-motion';
import styles from './style.module.css';
import { 
  FaOilCan, 
  FaCarBattery, 
  FaFan, 
  FaCarCrash,
  FaCarAlt,
  FaTools
} from 'react-icons/fa';
import { GiCarWheel, GiGearStickPattern } from 'react-icons/gi';
import { IoMdSpeedometer } from 'react-icons/io';

const Services = () => {
  const services = [
    {
      title: 'Alternators',
      description: 'Expert alternator repairs and replacements to keep your electrical system running smoothly.',
      icon: <IoMdSpeedometer />,
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Starter Motors',
      description: 'Fast and reliable starter motor services to get you back on the road quickly.',
      icon: <GiGearStickPattern />,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Car Battery Service',
      description: 'Battery testing, replacement, and jump-start services available 24/7.',
      icon: <FaCarBattery />,
      image: 'https://images.unsplash.com/photo-1580184482379-5e42d1be3a41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Car Air Conditioning',
      description: 'Keep cool with our professional A/C servicing, regassing, and repairs.',
      icon: <FaFan />,
      image: 'https://images.unsplash.com/photo-1560957125-9ed4b19a07a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: '24/7 Breakdown Service',
      description: 'Emergency assistance for battery, alternator, and starter motor issues anytime, anywhere.',
      icon: <FaCarCrash />,
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Airbag Diagnostics & Repair',
      description: 'Ensure safety with expert diagnostics and replacement of airbag systems.',
      icon: <FaCarAlt />,
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.backgroundPattern}></div>
      <div className={`container ${styles.servicesContainer}`}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        
        <motion.p 
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Precision services for peak automotive performance
        </motion.p>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.serviceImageContainer}>
                <motion.div
                  className={styles.serviceImage}
                  style={{ backgroundImage: `url(${service.image})` }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                >
                  <div className={styles.imageOverlay}></div>
                </motion.div>
              </div>
              
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    {service.icon}
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                <motion.a
                  href="#contact"
                  className={styles.learnMoreLink}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Learn more
                  <svg 
                    className={styles.learnMoreIcon} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;