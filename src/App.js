
import './App.css';

import Navbar from '../src/components/Navbar';
import HomeSection from '../src/sections/Home';
import AboutSection from '../src/sections/About';
import GallerySection from '../src/sections/Gallery';
import PressSection from '../src/sections/Press';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeSection/>
      <AboutSection/>
      <GallerySection/>
      <PressSection/>
      <Footer/>
    </div>
  );
}

export default App;
