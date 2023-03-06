import React, { memo } from 'react';

const LandingPageImage = memo(() => {
  return (
    // Include landing page image and a text
    <div className='flex w-full items-center font-Heading my-6'>
      <img className='mx-auto rounded-lg blur-xs shadow-md' alt='homepage-image' src='/images/Assets/HomeImage.jpg' />
    </div>
  )
});

export default LandingPageImage;