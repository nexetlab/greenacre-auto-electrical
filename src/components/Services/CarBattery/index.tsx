import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import styles from './style.module.css';

const CarBatteryPage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Car Battery Services</h1>
          <p>Keep Your Vehicle Powered & Reliable</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2>Professional Battery Services</h2>
          <p>Call Us Today: <a href="tel:0297905361">029790 5361</a></p>
          <p>Email Us Today: <a href="mailto:greenacreautoelectrical@outlook.com">greenacreautoelectrical@outlook.com</a></p>

          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <p>With over 30 years of experience, Greenacre Auto Electrical provides a wide range of car batteries for cars, trucks and motorcycles. A car battery is basically the heart of the car's electrical system and it provides electrical energy to your starter motor to start your vehicle.</p>
              
              <h3>Our Battery Services:</h3>
              <ul>
                <li>Battery testing and diagnostics</li>
                <li>Complete battery replacements</li>
                <li>Jump start services</li>
                <li>Electrical system checks</li>
                <li>Maintenance-free battery options</li>
              </ul>

              <p>All brand new car batteries have 2.5 years warranty and most car batteries are maintenance free. This means you don't need to go through the trouble to top up your car battery up with water.</p>
            </div>

            <div className={styles.imageContent}>
              <img 
                src="/images/battery-shelf.jpg" 
                alt="Our battery inventory" 
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

export default CarBatteryPage;