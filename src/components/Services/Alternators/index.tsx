import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import styles from './style.module.css';

const AlternatorsPage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Alternator Services</h1>
          <p>30+ Years of Expert Alternator Repairs & Replacements</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2>Professional Alternator Services</h2>
          <p>Call Us Today: <a href="tel:0297905361">029790 5361</a></p>
          <p>Email Us Today: <a href="mailto:greenacreautoelectrical@outlook.com">greenacreautoelectrical@outlook.com</a></p>

          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <p>Greenacre Auto Electrical has over 30 years experience working with alternators of all different kinds. We have a large variety of exchange alternators for all popular car makes and models. These include Ford, Holden, Mazda, Honda etc...</p>
              
              <p>One of the most important components of your vehicle's electrical system is indeed the alternator as it charges the battery while the engine is running. At Greenacre Auto Electrical, we install, maintain, diagnose faults and repair alternators from scratch ourselves, working with a variety of different car alternators.</p>

              <h3>Our Alternator Services Include:</h3>
              <ul>
                <li>Alternator diagnostics and testing</li>
                <li>Complete alternator replacements</li>
                <li>Professional reconditioning services</li>
                <li>Electrical system inspections</li>
                <li>Warranty-backed repairs</li>
              </ul>

              <p>Our qualified technicians specialise in reconditioning alternators with the best quality parts and they are assured to be restored to almost new condition. We have a large amount of stock to suit almost every vehicle with guaranteed fast service.</p>
            </div>

            <div className={styles.imageContent}>
              <img 
                src="/images/alternator-shelf.jpg" 
                alt="Our alternator inventory" 
                className={styles.serviceImage}
              />
              <img 
                src="/images/alternator-installation.jpg" 
                alt="Alternator installation" 
                className={styles.serviceImage}
              />
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </Layout>
  );
};

export default AlternatorsPage;