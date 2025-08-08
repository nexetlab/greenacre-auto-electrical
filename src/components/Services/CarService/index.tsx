import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import styles from './style.module.css';

const CarServicingPage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Comprehensive Car Servicing</h1>
          <p>Keeping Your Vehicle Road-Ready & Reliable</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2>Professional Car Servicing in Greenacre</h2>
          <p>Call Us Today: <a href="tel:0297905361">029790 5361</a></p>
          <p>Email Us Today: <a href="mailto:greenacreautoelectrical@outlook.com">greenacreautoelectrical@outlook.com</a></p>

          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <p>
                At Greenacre Auto Electrical, we offer full-service car maintenance to keep your vehicle running smoothly and safely. With over 30 years of experience, our certified mechanics ensure your car stays in top condition with every visit.
              </p>

              <h3>Our Car Servicing Includes:</h3>
              <ul>
                <li>Logbook servicing for new and used cars</li>
                <li>Oil and filter changes</li>
                <li>Brake system checks and repairs</li>
                <li>Cooling system and radiator inspections</li>
                <li>Battery health checks</li>
                <li>Suspension and steering inspections</li>
                <li>Lights, belts, hoses, and safety checks</li>
              </ul>

              <p>
                Whether you’re preparing for a long trip or just keeping up with routine maintenance, we tailor our service to your vehicle’s needs. We use high-quality parts and the latest diagnostic tools to deliver dependable results every time.
              </p>

              <h3>Why Regular Servicing Matters:</h3>
              <ul>
                <li>Improves fuel efficiency and performance</li>
                <li>Prevents costly repairs down the track</li>
                <li>Extends the life of your engine and components</li>
                <li>Ensures your warranty stays valid</li>
                <li>Keeps your family safe on the road</li>
              </ul>

              <p>
                Trust the team at Greenacre Auto Electrical for expert, affordable car servicing with honest advice and no surprises.
              </p>
            </div>

            <div className={styles.imageContent}>
              <img 
                src="/images/car-servicing.jpg" 
                alt="Mechanic performing car service" 
                className={styles.serviceImage}
              />
              <img 
                src="/images/oil-change.jpg" 
                alt="Oil and filter change" 
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

export default CarServicingPage;
