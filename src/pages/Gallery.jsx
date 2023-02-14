import React, {useState} from 'react';
import Footer from '../components/Footer';
import Images from '../components/Gallery/Images';
import Switcher from '../components/Gallery/Switcher';
import { IMAGETYPES } from '../enums/ImageType';

const Gallery = () => {

  // State
  const [activeTab, setActiveTab] = useState(IMAGETYPES.LNIllustrations);

  return (
    <div className='flex container w-full overflow-y-hidden'>
        <div className='w-4/5 mx-auto flex-col overflow-y-auto no-scrollbar'>
            <Switcher activeTab = {activeTab} setActiveTab= {setActiveTab}/>
            <Images activeTab = {activeTab}/>
            <Footer/> 
        </div>  
    </div>
  )
}

export default Gallery;