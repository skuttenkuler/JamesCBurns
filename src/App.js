
import './App.css';
import React from 'react';
import HomeSection from '../src/sections/Home';
import ActingDemosSection from './sections/ActingDemos';
import CODSection from '../src/sections/CallofDuty';
import GallerySection from '../src/sections/Gallery';
import PressSection from '../src/sections/Press';
import ContactSection from './sections/Contact';
import AboutSection from '../src/sections/About';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <div className="fire"></div>
      <HomeSection/>
      <ActingDemosSection/>
      <CODSection/>
      <GallerySection/>
      <PressSection/>
      <ContactSection/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}

export default App;
