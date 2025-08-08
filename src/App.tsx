import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import LocationMap from './components/Location';
import ScrollToTop from './components/ScrollToTop';
import '@/styles/global.css';

import CarServicingPage from './components/Services/CarService';
import PinkSlipInspectionPage from './components/Services/PinkSlip';
import AlternatorStarterPage from './components/Services/AlternatorStarterRefurbishment';

// Main sections
const Hero = lazy(() => import('@/components/Hero'));
const Services = lazy(() => import('@/components/Services'));
const About = lazy(() => import('@/components/About'));
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
const ContactForm = lazy(() => import('@/components/ContactForm'));

// Individual Service Pages (lazy-loaded)
const AlternatorsPage = lazy(() => import('@/components/Services/Alternators'));
const StarterMotorsPage = lazy(() => import('@/components/Services/StarterMotors'));
const CarBatteryPage = lazy(() => import('@/components/Services/CarBattery'));
const AirConditioningPage = lazy(() => import('@/components/Services/AirConditioning'));
const AirbagServicePage = lazy(() => import('@/components/Services/AirbagService'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Home Page (Single Page Layout) */}
              <Route
                path="/"
                element={
                  <>
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
                    <section id="location-map">
                      <LocationMap />
                    </section>
                    <section id="contact">
                      <ContactForm />
                    </section>
                  </>
                }
              />

              {/* Individual Service Pages */}
              <Route path="/services/alternators" element={<AlternatorsPage />} />
              <Route path="/services/starter-motors" element={<StarterMotorsPage />} />
              <Route path="/services/battery-service" element={<CarBatteryPage />} />
              <Route path="/services/air-conditioning" element={<AirConditioningPage />} />
              <Route path="/services/airbag-service" element={<AirbagServicePage />} />
              <Route path="/services/car-servicing" element={<CarServicingPage />} />
              <Route path="/services/pink-slip-inspection" element={<PinkSlipInspectionPage />} />
              <Route path="/services/alternator-starter-refurbishment" element={<AlternatorStarterPage />} />
              
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
