import styles from './style.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Greenacre Auto Electrical & Mechanical Services</h3>
            <p className={styles.footerText}>Your trusted auto electrical and mechanical service provider in Sydney for over 30 years.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <ul className={styles.footerContact}>
              <li>Sydney, NSW</li>
              <li><a href="tel:97905361">9790 5361</a></li>
              <li><a href="mailto:greenacreautoelectrical@outlook.com">greenacreautoelectrical@outlook.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Greenacre Auto Electrical & Mechanical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;