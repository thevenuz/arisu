import React from 'react';
import Footer from '../components/Shared/Footer';
import ShortStoryList from '../components/ShortStories/ShortStoryList';
import { PAGES } from '../enums/Pages';

const ShortStories = ({setActivePage}) => {

  setActivePage(PAGES.SHORTSTORIES);

  return (
    <div className='flex  w-full overflow-y-hidden'>
      <div className='w-full mx-auto overflow-y-auto no-scrollbar'>
      <div className='w-4/5 mx-auto overflow-y-auto no-scrollbar'>
            <ShortStoryList/>
            <Footer/>
      </div>
      </div>
    </div>
  )
}

export default ShortStories;