import React from 'react';
import HomeImage from '../../assets/images/HomeImageCropped.jpg';

const LandingPageImage = () => {
  return (
    // Include landing page image and a text
    <div className='flex w-full items-center font-Heading my-6'>
      <img className='mx-auto rounded-lg blur-xs shadow-md' alt='home-image' src={HomeImage} />
    </div>
  )
}

export default LandingPageImage;