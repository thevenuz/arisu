import React from 'react';
import AboutContent from '../components/About/AboutContent';

const About = () => {
  return (
    <div className='flex container w-full h-screen overflow-y-hidden'>
      <div className='w-4/5 mx-auto'>
        <AboutContent/>
      </div>
    </div>
  )
}

export default About;
