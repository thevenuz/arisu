import React from 'react';
import LandingPageImage from '../components/Home/LandingPageImage';
import Welcome from '../components/Home/Welcome';
import RecentsSection from '../components/Home/RecentsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='flex container w-full overflow-y-hidden'>
        <div className='flex-col w-4/5 mx-auto overflow-y-auto no-scrollbar'>
            <Welcome/>
            <LandingPageImage/>
            <RecentsSection/>   
            <Footer/>    
        </div>
        
    </div>
  )
}

export default Home;
