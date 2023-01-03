import React, {useState} from 'react';
import imagess from '../../assets/data/images/Images.json';
import LNIllustrations from '../../assets/data/images/LNIllustrations.json';
import OfficialArt from '../../assets/data/images/OfficialArt.json';
import Fanart from '../../assets/data/images/Fanart.json';
import Comics from '../../assets/data/images/Comics.json';
import ImageCard from './ImageCard';

const Images = ({activeTab}) => {

  //Based on active tab get different images
  const getImages = () => {
    return activeTab.toString().trim().replace(' ', '');
  }
  
  return (
    <div className='flex-row flex-1 w-full mx-auto my-6 shadow-md'>
      <div className='flex items-center justify-center mx-auto p-1'>
        <p className=' text-slate-50 font-bold text-3xl font-Outfit'>{activeTab.toString().toUpperCase()}</p>
      </div>
      <div className='columns-4 gap-x-1 pt-2'>
        {imagess.map((image) => {
          return <ImageCard image={image}/>
        })}
      </div>
    </div>
  )
}

export default Images;