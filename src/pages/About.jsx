import React from 'react';
import AboutContent from '../components/About/AboutContent';
import Footer from '../components/Shared/Footer';
import { PAGES } from '../enums/Pages';

const About = ({setActivePage, isMobileNavbarOpen = false}) => {

  setActivePage(PAGES.ABOUT);

  return (
    <div className={`flex w-full h-screen overflow-y-hidden ${isMobileNavbarOpen ? 'hidden' : ''}`}>
      <div className='w-full mx-auto overflow-y-auto no-scrollbar'>
      <div className='w-4/5 mx-auto overflow-y-auto no-scrollbar'>
        <AboutContent/>
        <Footer/>  
      </div>
      </div>
    </div>
  )
}

export default About;
