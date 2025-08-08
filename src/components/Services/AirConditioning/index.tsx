import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import styles from './style.module.css';

const AirConditioningPage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Air Conditioning Services</h1>
          <p>Stay Cool With Professional A/C Care</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2>Complete A/C Services</h2>
          <p>Call Us Today: <a href="tel:0297905361">029790 5361</a></p>
          <p>Email Us Today: <a href="mailto:greenacreautoelectrical@outlook.com">greenacreautoelectrical@outlook.com</a></p>

          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <p>Greenacre Auto Electrical follows the vehicle manufacturer's recommendations and uses only R134a as the replacement for the older R12 refrigerant. With over 30 year's experience, we are able to offer the highest level of car air-conditioning service and workmanship.</p>
              
              <h3>Our A/C Services Include:</h3>
              <ul>
                <li>Identify the type of gas in the system</li>
                <li>Diagnose and Repair all air conditioning problems</li>
                <li>Vacuum system for a minimum of 30 minutes</li>
                <li>Recharge with R134A refrigerant, Fluro dye and oil</li>
                <li>Leak test all components</li>
                <li>Carry out pressure and temperature test</li>
                <li>We repair and service compressors</li>
              </ul>

              <p>Your car air conditioning system is a series of machinery, pipes and filters which needs regular servicing much like your car's engine. We recommend an annual service to ensure the efficiency and cleanliness of your car air conditioning.</p>
            </div>

            <div className={styles.imageContent}>
              <img 
                src="/images/ac-service-in.png" 
                alt="A/C service in progress" 
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

export default AirConditioningPage;