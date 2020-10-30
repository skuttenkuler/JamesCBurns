
import './App.css';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './components/hook'; 
import { Burger, Menu } from './components';
import HomeSection from '../src/sections/Home';
import AboutSection from '../src/sections/About';
import GallerySection from '../src/sections/Gallery';
import PressSection from '../src/sections/Press';
import Footer from './components/Footer';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div className="App">
      <div ref={node}>
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
