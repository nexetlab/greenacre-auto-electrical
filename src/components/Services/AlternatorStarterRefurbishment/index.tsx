import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import styles from './style.module.css';

const AlternatorStarterPage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Alternator & Starter Motor Refurbishment</h1>
          <p>Specialist Reconditioning Services Backed by 30+ Years of Expertise</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2>Reliable Refurbishment & Reconditioning</h2>
          <p>Call Us Today: <a href="tel:0297905361">029790 5361</a></p>
          <p>Email Us Today: <a href="mailto:greenacreautoelectrical@outlook.com">greenacreautoelectrical@outlook.com</a></p>

          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <p>Greenacre Auto Electrical is a trusted name for alternator and starter motor refurbishment. Our workshop is fully equipped to restore these critical components to like-new condition using precise tools and high-quality parts. We take pride in helping customers extend the life of their vehicle’s electrical system affordably and reliably.</p>

              <h3>Our Refurbishment Services Include:</h3>
              <ul>
                <li>Comprehensive alternator and starter testing</li>
                <li>Disassembly, inspection, and internal cleaning</li>
                <li>Replacement of worn-out bearings, brushes, and coils</li>
                <li>Reconditioning using quality components</li>
                <li>Final reassembly and performance validation</li>
              </ul>

              <p>Whether you're dealing with slow starts, power loss, or intermittent issues, our team can restore your unit with attention to detail and efficiency. We carry refurbished stock and also offer on-the-spot service depending on your vehicle model and needs.</p>

              <h3>Why Choose Us?</h3>
              <ul>
                <li>Decades of hands-on expertise</li>
                <li>Fast turnaround and competitive pricing</li>
                <li>Access to rare and hard-to-find parts</li>
                <li>Warranty-backed workmanship</li>
              </ul>
            </div>

            <div className={styles.imageContent}>
              <img 
                src="/images/motor_refurbishment_1.jpeg" 
                alt="Alternator under refurbishment" 
                className={styles.serviceImage}
              />
              <img 
                src="/images/motor_refurbishment_2.jpeg" 
                alt="Starter motor being serviced" 
                className={styles.serviceImage}
              />
              <img 
                src="/images/motor_refurbishment_3.jpeg" 
                alt="Reconditioned alternators ready for install" 
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

export default AlternatorStarterPage;
