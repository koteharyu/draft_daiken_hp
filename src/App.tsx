import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Overview />
      <Services />
      <Workflow />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;