
import './App.css';
import React from 'react';
import HomeSection from '../src/sections/Home';
import AboutSection from '../src/sections/About';
import CODSection from '../src/sections/CallofDuty';
import GallerySection from '../src/sections/Gallery';
import PressSection from '../src/sections/Press';
import ContactSection from './sections/Contact';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <HomeSection/>
      <CODSection/>
      <AboutSection/>
      <GallerySection/>
      <PressSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
