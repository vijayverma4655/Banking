import React from 'react';
import FeatureSection from './components/Cardsection/Featuresection';
import Card1 from './components/Cardsection1/Card1';
import Card2 from './components/Cardsectoin2/Card2';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import Review from './components/Review/Review';
import 'aos/dist/aos.css'; 
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  // eslint-disable-next-line no-unused-vars
const handleOrderPopup = () => {
  setOrderPopup(!orderPopup);
};

  React.useEffect(() => {
    AOS.init({
      once: true, // Animation should only happen once
      offset: 200, // Adjust animation trigger point
    });
  }, []);
  
  return (
    <div>

      <Navbar/>
      <Hero/>
      
      <FeatureSection />
      <Card1 />
      <Card2 />

      <Review />
      <Download />
      <Footer />
      <Login/>
    </div>
  );
};

export default App;