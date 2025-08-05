import { motion } from 'framer-motion';
import styles from './style.module.css';

const services = [
  {
    title: 'Alternators',
    description: 'Expert alternator repairs and replacements to keep your electrical system running smoothly.',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Starter Motors',
    description: 'Fast and reliable starter motor services to get you back on the road quickly.',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Car Battery',
    description: 'Battery testing, replacement, and jump-start services available 24/7.',
    icon: '🔋',
    image: 'https://images.unsplash.com/photo-1580184482379-5e42d1be3a41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Car Air Conditioning',
    description: 'Keep cool with our professional A/C servicing, regassing, and repairs.',
    icon: '❄️',
    image: 'https://images.unsplash.com/photo-1560957125-9ed4b19a07a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: '24/7 Breakdown Service',
    description: 'Emergency assistance for battery, alternator, and starter motor issues anytime, anywhere.',
    icon: '🆘',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
];

const Services = () => {
  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div 
                className={styles.serviceImage}
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;