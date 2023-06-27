import TimeCards from "./Body/TimeCards/TimeCards";
import Vision from "./Body/Vision/Vision";
import Navbar from "./Navbar/Navbar";
import CardSlider from "./Slider/CardSlider";
import TrustedTechnology from "./Body/Technology/TrustedTechnology";
import { useParallax } from "react-scroll-parallax";

import './App.css';

function App() {
  const parallax = useParallax({
    
  });

  return (
    <div className="App">
      <div ref={parallax.ref} className="spinner">
        <div className="nav">
          <Navbar/>
        </div>
        <div className="card-slider">
          <CardSlider/>
        </div>
        <div className="vision">
          <Vision/>
        </div>
        <div className="time-cards">
          <TimeCards/>
        </div>
        <div className="trusted-technology">
          <TrustedTechnology/>
        </div>
      </div>
    </div>
  );  
}

export default App;
