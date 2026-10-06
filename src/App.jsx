import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Trainers from './pages/Trainers';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const routeTitles = {
  '/': 'IMIZI Training Club — Strength Starts at the Roots | Kigali, Rwanda',
  '/about': 'About the Facility & Standards — IMIZI Training Club',
  '/classes': 'Classes & Weekly Schedule — IMIZI Training Club',
  '/trainers': 'Coaching Team & Standards — IMIZI Training Club',
  '/pricing': 'Memberships & Rates (RWF) — IMIZI Training Club',
  '/contact': 'Visit & Free Trial — IMIZI Training Club',
};

function App() {
  const location = useLocation();

  useEffect(() => {
    const title = routeTitles[location.pathname] || 'IMIZI Training Club — Strength Starts at the Roots';
    document.title = title;
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-bone">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;