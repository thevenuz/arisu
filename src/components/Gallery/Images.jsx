import React, {useState} from 'react';
import LNIllustrations from '../../data/assets/images/LNIllustrations.json';
import OfficialArt from '../../data/assets/images/OfficialArt.json';
import Fanart from '../../data/assets/images/Fanart.json';
import AIArt from '../../data/assets/images/AIArt.json';
import ImageCard from './ImageCard';
import { IMAGETYPES } from '../../enums/ImageType';

const Images = ({activeTab}) => {

  //Based on active tab get different images
  const getImages = () => {

    if (activeTab === IMAGETYPES.LNIllustrations) {
      return LNIllustrations;
    }
    else if (activeTab === IMAGETYPES.OfficialArt) {
      const latestOfficialArt = [...OfficialArt].reverse();
      return latestOfficialArt;
    }
    else if (activeTab === IMAGETYPES.Fanart) {
      const latestFanArt = [...Fanart].reverse();
      return latestFanArt;
    }
    else if (activeTab === IMAGETYPES.AIArt) {
      const latestAIArt = [...AIArt].reverse();
      return latestAIArt;
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