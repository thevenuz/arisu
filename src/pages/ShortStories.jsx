import React from 'react';
import ShortStoryList from '../components/ShortStories/ShortStoryList';

const ShortStories = () => {
  return (
    <div className='flex container  w-full h-full'>
      <div className='w-4/5 mx-auto'>
            <ShortStoryList/>
      </div>
    </div>
  )
}

export default ShortStories;