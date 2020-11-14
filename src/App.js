
import './App.css';
import './App.scss';
import ReactDOM from 'react-dom';
import React, {useState, useRef} from 'react';
import HomeSection from '../src/sections/Home';
import ActingDemosSection from './sections/ActingDemos';
import CODSection from '../src/sections/CallofDuty';
import GallerySection from '../src/sections/Gallery';
import SocialSection from './sections/Social';
import PressSection from '../src/sections/Press';
import ContactSection from './sections/Contact';
import AboutSection from '../src/sections/About';
import Footer from './components/Footer';

import { useOnClickOutside } from '../src/components/hook'; 
import { Burger, Menu } from '../src/components';

function App() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
  return (
    <div className="App" ref={node}>
      <div className="fire"></div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <HomeSection/>
      <ActingDemosSection/>
      <CODSection/>
      <SocialSection/>
      <GallerySection/>
      <PressSection/>
      <ContactSection/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}
ReactDOM.render(
  <App />,
    document.getElementById('root')
)

export default App;
