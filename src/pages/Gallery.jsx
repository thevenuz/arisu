import React, {useState} from 'react';
import Images from '../components/Gallery/Images';
import Switcher from '../components/Gallery/Switcher';
import { IMAGETYPES } from '../enums/ImageType';

const Gallery = () => {

  // State
  const [activeTab, setActiveTab] = useState(IMAGETYPES.LNIllustrations);

  return (
    <div className='flex container w-full h-full'>
        <div className='w-4/5 mx-auto'>
            <Switcher activeTab = {activeTab} setActiveTab= {setActiveTab}/>
            <Images activeTab = {activeTab}/>
        </div>
    </div>
  )
}

export default Gallery;