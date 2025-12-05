import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProperties from './components/FeaturedProperties';
import About from './components/About';
import CurrentOpenings from './components/CurrentOpenings';
import Testimonials from './components/Testimonials';
import Accreditations from './components/Accreditations';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-[#f5f5f7]">
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedProperties />
        <About />
        <CurrentOpenings />
        <Testimonials />
        <Accreditations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;