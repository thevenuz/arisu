import React from 'react';
import LandingPageImage from '../components/Home/LandingPageImage';
import Welcome from '../components/Home/Welcome';
import RecentsSection from '../components/Home/RecentsSection';
import Footer from '../components/Shared/Footer';
import { PAGES } from '../enums/Pages';

const Home = ({setActivePage, isMobileNavbarOpen = false}) => {

  setActivePage(PAGES.HOME);
  
  return (
    <div className={`flex w-full overflow-y-hidden ${isMobileNavbarOpen ? 'hidden' : ''}`}>
      <div className='w-full mx-auto overflow-y-auto no-scrollbar'>
        <div className='flex-col w-full md:w-4/5 mx-auto overflow-y-auto no-scrollbar'>
              <Welcome/>
              <LandingPageImage/>
              <RecentsSection/>   
              <Footer/>    
          </div>
      </div>  
    </div>
  )
}

export default Home;
