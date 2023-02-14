import React from 'react';
import FanficsList from '../components/Fanfics/FanficsList';
import Footer from '../components/Footer';

const Fanfics = () => {
  return (
    <div className='flex container w-full overflow-y-hidden'>
        <div className='w-4/5 mx-auto overflow-y-auto no-scrollbar'>
          <FanficsList/>
          <Footer/>  
        </div>
    </div>
  )
}

export default Fanfics
