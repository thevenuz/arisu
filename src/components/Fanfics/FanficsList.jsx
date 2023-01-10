import React from 'react';
import fanfics from '../../assets/data/fanfics/fanfics.json'
import FanficItem from './FanficItem';

const FanficsList = () => {
  return (
    <div className='p-4 w-5/6 mx-auto font-SS-content'>
        <ul>
            {fanfics.map((fic) => {
                return <li className='my-2'><FanficItem fic={fic}/></li> 
            })}
        </ul>
    </div>
  )
}

export default FanficsList