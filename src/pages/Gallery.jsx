import React, {useState, useEffect} from 'react';
import Footer from '../components/Shared/Footer';
import Images from '../components/Gallery/Images';
import Switcher from '../components/Gallery/Switcher';
import { IMAGETYPES } from '../enums/ImageType';
import {useSearchParams} from 'react-router-dom';
import { PAGES } from '../enums/Pages';

const Gallery = ({isDarkMode = false, setActivePage, isMobileNavbarOpen = false}) => {

  setActivePage(PAGES.GALLERY);

  // State
  const [activeTab, setActiveTab] = useState(IMAGETYPES.LNIllustrations);
  const [urlParams, setUrlParams] = useSearchParams();

  const [queryTab] = useState(urlParams.get('tab'));

  useEffect(()=>{
    if(queryTab){
      switch(queryTab){
        case 'ln':
          setActiveTab(IMAGETYPES.LNIllustrations);
          break;
        case 'off-art':
          setActiveTab(IMAGETYPES.OfficialArt);
          break;
        case 'fanart':
          setActiveTab(IMAGETYPES.Fanart);
          break;
        case 'ai':
          setActiveTab(IMAGETYPES.AIArt);
          break;
        default:
          setActiveTab(IMAGETYPES.LNIllustrations);
          break;
      }
    }
  }, []);

  return (
    <div className={`flex w-full overflow-y-hidden ${isMobileNavbarOpen ? 'hidden' : ''}`}>
      <div className='w-full mx-auto overflow-y-auto no-scrollbar'>
        <div className='w-full md:w-4/5 mx-auto flex-col overflow-y-auto no-scrollbar'>
            <Switcher activeTab = {activeTab} setActiveTab= {setActiveTab} setUrlParams={setUrlParams} isDarkMode = {isDarkMode}/>
            <Images activeTab = {activeTab}/>
            <Footer/> 
        </div>  
        </div>
    </div>
  )
}

export default Gallery;