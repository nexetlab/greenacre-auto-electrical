import { lazy, Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import '@/styles/global.css';

const Hero = lazy(() => import('@/components/Hero'));
const Services = lazy(() => import('@/components/Services'));
const About = lazy(() => import('@/components/About'));
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
const ContactForm = lazy(() => import('@/components/ContactForm'));

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            {/* Each section has a corresponding ID for anchor navigation */}
            <section id="home">
              <Hero />
            </section>
            <section id="services">
              <Services />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="why-choose-us">
              <WhyChooseUs />
            </section>
            <section id="contact">
              <ContactForm />
            </section>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
