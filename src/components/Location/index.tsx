import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaDirections, 
  FaClock, 
  FaParking,
  FaExternalLinkAlt 
} from 'react-icons/fa';
import styles from './style.module.css';

const LocationMap = () => {
  const handleDirectionsClick = () => {
    window.open('https://maps.app.goo.gl/JFoKBVv4ddziFU4m6', '_blank');
  };

  const locationFeatures = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Easy to Find',
      description: 'Located in the heart of Sydney, NSW'
    },
    {
      icon: <FaParking />,
      title: 'Parking Available',
      description: 'Convenient parking for all customers'
    },
    {
      icon: <FaClock />,
      title: 'Open 6 Days',
      description: 'Monday to Saturday service'
    },
    {
      icon: <FaDirections />,
      title: 'GPS Navigation',
      description: 'Get turn-by-turn directions'
    }
  ];

  return (
    <section className={styles.locationSection}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <h2 className="section-title">Locate Us</h2>
          <p className={styles.sectionSubtitle}>
            Visit our modern facility in Sydney for professional auto electrical and mechanical services
          </p>
        </motion.div>

        <div className={styles.locationContainer}>
          {/* Location Features */}
          <motion.div
            className={styles.locationInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.locationInfoHeader}>
              <h3 className={styles.locationInfoTitle}>Why Visit Us?</h3>
              <p className={styles.locationInfoSubtitle}>
                Experience our professional service at our convenient Sydney location
              </p>
            </div>

            <div className={styles.featuresGrid}>
              {locationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <div className={styles.featureContent}>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.actionButtons}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className={styles.directionsBtn}
                onClick={handleDirectionsClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDirections className={styles.buttonIcon} />
                Get Directions
                <FaExternalLinkAlt className={styles.externalIcon} />
              </motion.button>
              
              <div className={styles.addressInfo}>
                <FaMapMarkerAlt className={styles.addressIcon} />
                <div className={styles.addressText}>
                  <span className={styles.addressLabel}>Our Address</span>
                  <span className={styles.addressValue}>81 Beresford Ave, Greenacre NSW 2190, Australia</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            className={styles.mapContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.mapWrapper}>
              <div className={styles.mapOverlay} onClick={handleDirectionsClick}>
                <div className={styles.overlayContent}>
                  <FaMapMarkerAlt className={styles.overlayIcon} />
                  <h4 className={styles.overlayTitle}>View Interactive Map</h4>
                  <p className={styles.overlaySubtitle}>Click to open in Google Maps</p>
                  <div className={styles.overlayButton}>
                    <FaDirections />
                    Open Map
                  </div>
                </div>
              </div>
              
              <iframe
                className={styles.mapFrame}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106497.32278058754!2d150.8449859!3d-33.8650815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632bcc53!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2s!4v1647875953820!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Greenacre Auto Electrical & Mechanical Services Location"
              ></iframe>
            </div>

            <div className={styles.mapFooter}>
              <div className={styles.mapInfo}>
                <FaMapMarkerAlt className={styles.mapInfoIcon} />
                <span>Greenacre Auto Electrical & Mechanical Services</span>
              </div>
              <motion.button
                className={styles.viewMapBtn}
                onClick={handleDirectionsClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Larger Map
                <FaExternalLinkAlt />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;