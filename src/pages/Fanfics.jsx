import React from 'react';
import FanficsList from '../components/Fanfics/FanficsList';
import Footer from '../components/Footer';
import { PAGES } from '../enums/Pages';

const Fanfics = ({setActivePage}) => {

  setActivePage(PAGES.FANFICS);

  return (
    <div className='flex w-full overflow-y-hidden'>
      <div className='w-full mx-auto overflow-y-auto no-scrollbar'>
        <div className='w-4/5 mx-auto overflow-y-auto no-scrollbar'>
          <FanficsList/>
          <Footer/>  
        </div>
        </div>
    </div>
  )
}

export default Fanfics
