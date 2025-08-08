import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { FaClipboardCheck } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';



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
      id: 'alternator-starter-refurbishment',
      title: 'Alternator & Starter Motor Refurbishment',
      description: 'Expert refurbishment and reconditioning to restore performance and extend the lifespan of your Vehicle’s alternator and starter motor.',
      icon: <FaWrench />,
      image: '/images/motor_refurbishment.webp'
    },
    {
      id: 'alternators',
      title: 'Alternators',
      description: 'Expert alternator repairs and replacements to keep your electrical system running smoothly.',
      icon: <IoMdSpeedometer />,
      image: '/images/alternator-service.png'
    },
    {
      id: 'starter-motors',
      title: 'Starter Motors',
      description: 'Fast and reliable starter motor services to get you back on the road quickly.',
      icon: <GiGearStickPattern />,
      image: '/images/starter-moto-service.png'
    },
    {
      id: 'battery-service',
      title: 'Car Battery Service',
      description: 'Battery testing, replacement, and jump-start services available 24/7.',
      icon: <FaCarBattery />,
      image: '/images/battery-service.png'
    },
    {
      id: 'air-conditioning',
      title: 'Car Air Conditioning',
      description: 'Keep cool with our professional A/C servicing, regassing, and repairs.',
      icon: <FaFan />,
      image: '/images/ac-service.png'
    },
    {
      id: 'pink-slip-inspection',
      title: 'Pink Slip Inspection',
      description: 'Certified eSafety checks to keep your vehicle roadworthy. Fast, reliable, and fully compliant.',
      icon: <FaClipboardCheck />,
      image: '/images/pink-slip.jpg'
    },
    {
      id: 'airbag-service',
      title: 'Airbag Diagnostics & Repair',
      description: 'Ensure safety with expert diagnostics and replacement of airbag systems.',
      icon: <FaCarAlt />,
      image: '/images/airbag-service.jpg'
    },
    {
      id: 'car-servicing',
      title: 'Comprehensive Car Servicing',
      description: 'Regular servicing to keep your vehicle running smoothly and extend its lifespan. Includes oil changes, filter checks, and overall inspection.',
      icon: <FaTools />,
      image: '/images/car-servicing.jpg'
    }


  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.backgroundImage}></div>
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
            <Link to={`/services/${service.id}`} key={service.id}>
              <motion.div
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
                  <div className={styles.learnMoreLink}>
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
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;