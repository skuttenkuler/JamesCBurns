
import './App.css';
import React, { useState } from 'react';
import { Burger, Menu } from './components';
import HomeSection from '../src/sections/Home';
import AboutSection from '../src/sections/About';
import GallerySection from '../src/sections/Gallery';
import PressSection from '../src/sections/Press';
import Footer from './components/Footer';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <HomeSection/>
      <AboutSection/>
      <GallerySection/>
      <PressSection/>
      <Footer/>
    </div>
  );
}

export default App;
