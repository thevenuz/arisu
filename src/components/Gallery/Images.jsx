import React, {useState} from 'react';
import imagess from '../../assets/data/images/Images.json';
import LNIllustrations from '../../assets/data/images/LNIllustrations.json';
import OfficialArt from '../../assets/data/images/OfficialArt.json';
import Fanart from '../../assets/data/images/Fanart.json';
import AIArt from '../../assets/data/images/Comics.json';
import ImageCard from './ImageCard';
import { IMAGETYPES } from '../../enums/ImageType';

const Images = ({activeTab}) => {

  //Based on active tab get different images
  const getImages = () => {

    if (activeTab === IMAGETYPES.LNIllustrations) {
      return LNIllustrations;
    }
    else if (activeTab === IMAGETYPES.OfficialArt) {
      return OfficialArt;
    }
    else if (activeTab === IMAGETYPES.Fanart) {
      return Fanart;
    }
    else if (activeTab === IMAGETYPES.AIArt) {
      return AIArt;
    }

    return LNIllustrations;
  }
  
  return (
    <div className='flex-row flex-1 w-full h-screen mx-auto my-6 shadow-md overflow-y-auto no-scrollbar'>
      <div className='flex items-center justify-center mx-auto p-1'>
        {/* <p className=' text-slate-50 font-bold text-3xl font-Heading'>{activeTab.toString().toUpperCase()}</p> */}
      </div>
      <div className='columns-4 gap-x-1 pt-2 '>
        {getImages().map((image) => {
          return <ImageCard image={image}/>
        })}
      </div>
    </div>
  )
}

export default Images;