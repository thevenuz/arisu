import React from 'react';
import FanficsList from '../components/Fanfics/FanficsList';

const Fanfics = () => {
  return (
    <div className='flex container w-full h-full'>
        <div className='w-4/5 mx-auto'>
          <FanficsList/>
        </div>
    </div>
  )
}

export default Fanfics
