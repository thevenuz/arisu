import React, { memo } from 'react';
import fanfics from '../../data/assets/fanfics/fanfics.json';
import FanficItem from './FanficItem';

const FanficsList = memo(() => {
  return (
    <div className='flex-1 p-4 w-5/6 mx-auto font-Content min-h-screen'>
        <ul>
            {fanfics.reverse().map((fic) => {
                return <li className='my-2'><FanficItem fic={fic}/></li> 
            })}
        </ul>
    </div>
  )
});

export default FanficsList
