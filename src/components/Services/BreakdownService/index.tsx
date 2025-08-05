import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import styles from './style.module.css';

const BreakdownServicePage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>24/7 Breakdown Service</h1>
          <p>Emergency Assistance Whenever You Need It</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2>Round-the-Clock Emergency Services</h2>
          <p>Call Us Today: <a href="tel:97905361">9790 5361</a></p>
          <p>Email Us Today: <a href="mailto:greenacreautoelectrical@outlook.com">greenacreautoelectrical@outlook.com</a></p>

          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <p>Greenacre Auto Electrical provides 24/7 emergency breakdown services for battery, alternator, and starter motor issues. Our team is ready to assist you anytime, anywhere in the Sydney area.</p>
              
              <h3>Our Emergency Services Include:</h3>
              <ul>
                <li>24/7 battery jump starts and replacements</li>
                <li>On-the-spot alternator diagnostics</li>
                <li>Emergency starter motor repairs</li>
                <li>Mobile electrical system diagnostics</li>
                <li>Towing coordination if needed</li>
              </ul>

              <p>Being stranded with car trouble is stressful enough - that's why we offer prompt, reliable service to get you back on the road as quickly as possible. Our mobile technicians carry a wide range of parts to handle most common electrical issues on the spot.</p>

              <h3>When to Call Our Breakdown Service:</h3>
              <ul>
                <li>Your car won't start (clicking noise or no sound)</li>
                <li>Warning lights on dashboard</li>
                <li>Battery-related issues</li>
                <li>Alternator or starter motor failure</li>
                <li>Any electrical system malfunction</li>
              </ul>
            </div>

            <div className={styles.imageContent}>
              <img 
                src="/images/breakdown-service.jpg" 
                alt="Our breakdown service vehicle" 
                className={styles.serviceImage}
              />
              <img 
                src="/images/roadside-assistance.jpg" 
                alt="Technician providing roadside assistance" 
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

export default BreakdownServicePage;