import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaCreditCard,
  FaUser,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import styles from './style.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after showing success message
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactItems = [
    {
      icon: <FaMapMarkerAlt />,
      text: '81 Beresford Ave, Greenacre NSW 2190, Australia',
      type: 'address'
    },
    {
      icon: <FaPhone />,
      text: '029790 5361',
      type: 'phone',
      href: 'tel:0297905361'
    },
    {
      icon: <FaEnvelope />,
      text: 'greenacreautoelectrical@outlook.com',
      type: 'email',
      href: 'mailto:greenacreautoelectrical@outlook.com'
    },
    {
      icon: <FaClock />,
      text: 'Open 6 Days a Week',
      type: 'hours'
    },
    {
      icon: <FaCreditCard />,
      text: 'EFTPOS, Cash, Cheques, All Major Credit Cards',
      type: 'payment'
    }
  ];

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className={styles.sectionSubtitle}>
            Ready to get your vehicle serviced? Contact us today for professional auto electrical and mechanical services.
          </p>
        </motion.div>

        <div className={styles.contactContainer}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.contactInfoHeader}>
              <h3 className={styles.contactInfoTitle}>Contact Information</h3>
              <p className={styles.contactInfoSubtitle}>
                We're here to help with all your automotive needs
              </p>
            </div>

            <div className={styles.contactDetails}>
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.contactItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.contactIcon}>
                    {item.icon}
                  </div>
                  <div className={styles.contactText}>
                    {item.href ? (
                      <a href={item.href} className={styles.contactLink}>
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.trustIndicators}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={styles.trustBadge}>
                <FaCheckCircle className={styles.trustIcon} />
                <span>30+ Years Experience</span>
              </div>
              <div className={styles.trustBadge}>
                <FaCheckCircle className={styles.trustIcon} />
                <span>Licensed & Insured</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.formContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Send us a Message</h3>
              <p className={styles.formSubtitle}>
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  <FaUser className={styles.labelIcon} />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  <FaEnvelope className={styles.labelIcon} />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  <FaEnvelope className={styles.labelIcon} />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  rows={5}
                  placeholder="Tell us about your vehicle's needs..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className={`${styles.submitBtn} ${isSubmitted ? styles.submitted : ''}`}
                disabled={isSubmitting || isSubmitted}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
              >
                {isSubmitted ? (
                  <>
                    <FaCheckCircle className={styles.buttonIcon} />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className={styles.buttonIcon} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;