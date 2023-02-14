import React from 'react';
import Footer from '../components/Footer';
import ShortStoryList from '../components/ShortStories/ShortStoryList';

const ShortStories = () => {
  return (
    <div className='flex container  w-full overflow-y-hidden'>
      <div className='w-4/5 mx-auto overflow-y-auto no-scrollbar'>
            <ShortStoryList/>
            <Footer/>
      </div>
    </div>
  )
}

export default ShortStories;