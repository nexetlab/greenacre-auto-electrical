import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import styles from './style.module.css';

const PinkSlipInspectionPage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Pink Slip Inspections (eSafety Checks)</h1>
          <p>Ensuring Your Vehicle Meets NSW Roadworthy Standards</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <h2>NSW Certified Pink Slip Inspection Station</h2>
          <p>Call Us Today: <a href="tel:0297905361">029790 5361</a></p>
          <p>Email Us Today: <a href="mailto:greenacreautoelectrical@outlook.com">greenacreautoelectrical@outlook.com</a></p>

          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <p>At Greenacre Auto Electrical, we offer licensed Pink Slip inspections (also known as eSafety checks) to verify your vehicle’s roadworthiness in accordance with NSW Transport regulations. If your registration renewal notice requests an inspection, we’ve got you covered.</p>
              
              <h3>What We Check During a Pink Slip Inspection:</h3>
              <ul>
                <li>Tyres and tread depth</li>
                <li>Brakes and brake fluid levels</li>
                <li>Suspension and steering components</li>
                <li>Lights, indicators, and windscreen wipers</li>
                <li>Seat belts and safety restraints</li>
                <li>Engine leaks and exhaust system</li>
                <li>Battery condition and electrical systems</li>
              </ul>

              <p>Once passed, your inspection results are electronically sent to Transport for NSW, allowing you to renew your registration online or in person without delay. If repairs are needed, we’ll explain what needs to be done and help you get back on the road safely.</p>

              <h3>When Do You Need a Pink Slip?</h3>
              <ul>
                <li>Your registration renewal notice says an inspection is due</li>
                <li>Your vehicle is over 5 years old</li>
                <li>You’re selling or transferring ownership of the vehicle</li>
              </ul>

              <p>We aim to make the inspection process smooth and hassle-free, with clear guidance every step of the way.</p>
            </div>

            <div className={styles.imageContent}>
              <img 
                src="/images/pink-slip.jpg" 
                alt="Mechanic performing pink slip inspection" 
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

export default PinkSlipInspectionPage;
