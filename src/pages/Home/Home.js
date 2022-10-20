import React from 'react' 
import About from './About/About';
import Footer from './Footer/Footer';
import Intro from './Intro/Intro' 
import Slider from './Slider/Slider';
const Home = () => {
  return (
    <div>
     <Intro/>
     <Slider/>
     <About/>  
     <Footer/>
    </div>
  );
}
export default Home