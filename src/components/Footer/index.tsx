import styles from './style.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Company Info Section */}
          <div className={styles.footerSection}>
            <div className={styles.companyInfo}>
              <h3 className={styles.companyName}>
                Greenacre Auto Electrical & Mechanical Services
              </h3>
              <p className={styles.companyDescription}>
                Your trusted auto electrical and mechanical service provider in Sydney for over 30 years.
              </p>
              <div className={styles.trustBadge}>
                <span className={styles.badge}>30+ Years Experience</span>
                <span className={styles.badge}>Trusted in Sydney</span>
              </div>
            </div>
          </div>



          {/* Contact Information Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaMapMarkerAlt />
                </div>
                <span>81 Beresford Ave, Greenacre NSW 2190, Australia</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaPhone />
                </div>
                <a href="tel:0297905361" className={styles.contactLink}>029790 5361</a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaEnvelope />
                </div>
                <a href="mailto:greenacreautoelectrical@outlook.com" className={styles.contactLink}>
                  greenacreautoelectrical@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>© {currentYear} Greenacre Auto Electrical & Mechanical Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;