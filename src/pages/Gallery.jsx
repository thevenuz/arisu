import React from 'react';
import Images from '../components/Gallery/Images';
import Switcher from '../components/Gallery/Switcher';

const Gallery = () => {
  return (
    <div className='flex container w-full h-full'>
        <div className='w-4/5 mx-auto'>
            <Switcher/>
            <Images/>
        </div>
    </div>
  )
}

export default Gallery;