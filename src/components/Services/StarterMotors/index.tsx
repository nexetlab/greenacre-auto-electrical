import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import styles from './style.module.css';

const StarterMotorsPage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Starter Motor Services</h1>
          <p>Reliable Starting Solutions Since 1990</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2>Professional Starter Motor Services</h2>
          <p>Call Us Today: <a href="tel:0297905361">029790 5361</a></p>
          <p>Email Us Today: <a href="mailto:greenacreautoelectrical@outlook.com">greenacreautoelectrical@outlook.com</a></p>

          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <p>One of the most important components of your vehicle's electrical system is indeed the starter motor as it starts your car. Greenacre Auto Electrical has over 30 years experience working with starter motors of all different kinds.</p>
              
              <h3>How do I know if I have a starter motor problem?</h3>
              <ul>
                <li>Engine is hard, slow or noisy to start</li>
                <li>Makes a clicking sound when starting</li>
                <li>The engine simply doesn't start</li>
              </ul>

              <p>Our qualified technicians specialise in reconditioning starter motors with the best quality parts and they are assured to be restored to almost new condition. We have a large amount of stock to suit almost every vehicle with guaranteed fast service.</p>
            </div>

            <div className={styles.imageContent}>
              <img 
                src="/images/starter-moto-service.png" 
                alt="Our starter motor inventory" 
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

export default StarterMotorsPage;