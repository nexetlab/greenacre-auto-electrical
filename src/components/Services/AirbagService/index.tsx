import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import styles from './style.module.css';

const AirbagServicePage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Airbag Diagnostics & Repair</h1>
          <p>Your Safety Is Our Priority</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2>Professional Airbag System Services</h2>
          <p>Call Us Today: <a href="tel:0297905361">029790 5361</a></p>
          <p>Email Us Today: <a href="mailto:greenacreautoelectrical@outlook.com">greenacreautoelectrical@outlook.com</a></p>

          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <p>At Greenacre Auto Electrical, we specialize in airbag system diagnostics and repairs to ensure your vehicle's safety systems are functioning properly. With over 30 years of experience, our technicians are trained to handle all airbag-related issues with precision and care.</p>
              
              <h3>Our Airbag Services Include:</h3>
              <ul>
                <li>Comprehensive airbag system diagnostics</li>
                <li>Airbag module reset and reprogramming</li>
                <li>Sensor replacement and calibration</li>
                <li>Clock spring repairs</li>
                <li>Complete airbag system replacements</li>
                <li>Warning light diagnosis and repair</li>
              </ul>

              <p>Modern airbag systems are complex safety features that require specialized equipment and knowledge to service properly. Our workshop is equipped with the latest diagnostic tools to accurately identify and resolve airbag system issues.</p>

              <h3>Signs You Need Airbag Service:</h3>
              <ul>
                <li>Airbag warning light is illuminated</li>
                <li>Airbag cover is damaged or loose</li>
                <li>Vehicle has been in an accident</li>
                <li>Previous airbag deployment</li>
                <li>Electrical issues affecting safety systems</li>
              </ul>
            </div>

            <div className={styles.imageContent}>
              <img 
                src="/images/airbag-service.jpg" 
                alt="Technician working on airbag system" 
                className={styles.serviceImage}
              />
              <img 
                src="/images/airbag-diagnostics.jpg" 
                alt="Airbag diagnostic equipment" 
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

export default AirbagServicePage;