
import './App.css';

import { Burger, Menu } from './components';
import HomeSection from '../src/sections/Home';
import AboutSection from '../src/sections/About';
import GallerySection from '../src/sections/Gallery';
import PressSection from '../src/sections/Press';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Burger/>
      
      <HomeSection/>
      <AboutSection/>
      <GallerySection/>
      <PressSection/>
      <Footer/>
    </div>
  );
}

export default App;
