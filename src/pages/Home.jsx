import React from 'react';
import LandingPageImage from '../components/Home/LandingPageImage';
import Welcome from '../components/Home/Welcome';
import RecentsSection from '../components/Home/RecentsSection';

const Home = () => {
  return (
    <div className='flex container  w-full h-full'>
        <div className='w-4/5 mx-auto'>
            <Welcome/>
            <LandingPageImage/>
            <RecentsSection/>
        </div>
    </div>
  )
}

export default Home;
