import React, {useEffect} from 'react';
import { IMAGETYPES } from '../../enums/ImageType';

const Switcher = ({activeTab, setActiveTab, setUrlParams}) => {

    // Set Active tab state
    const setCurrentTab = (imageType) => {
        setActiveTab(imageType);
    }

  return (
    // This is to switch between different image sources
    <div className='flex w-full items-center align-middle my-6 font-Heading'>
        <div className='w-1/3 h-10 rounded-lg flex mx-auto shadow-md font-bold text-main-text border-[1px] border-main-bg'>
            {/* Different Image sources */}
            <div className={`flex-auto flex justify-center align-middle items-center shadow-md ${activeTab === IMAGETYPES.LNIllustrations ? ' bg-accent-bar rounded-lg' : ''}`} onClick={() => {
              setCurrentTab(IMAGETYPES.LNIllustrations);
              setUrlParams({'tab':'ln'});
              }}>
                <a href='#'>LN Illustrations</a>
            </div>
            <div className={`flex-auto flex justify-center align-middle items-center shadow-md ${activeTab === IMAGETYPES.OfficialArt ? 'bg-accent-bar rounded-lg' : ''}`} onClick={() => {
              setCurrentTab(IMAGETYPES.OfficialArt);
              setUrlParams({'tab':'off-art'});
              }}>
                <a href='#'>Official Art</a>
            </div>
            <div className={`flex-auto flex justify-center align-middle items-center shadow-md ${activeTab === IMAGETYPES.Fanart ? 'bg-accent-bar rounded-lg' : ''}`}  onClick={() => {
              setCurrentTab(IMAGETYPES.Fanart);
              setUrlParams({'tab':'fanart'});
              }}>
              <a href='#'>Fanart</a>
            </div>
            <div className={`flex-auto flex justify-center align-middle items-center shadow-md ${activeTab === IMAGETYPES.AIArt ? 'bg-accent-bar rounded-lg' : ''}`}  onClick={() => {
              setCurrentTab(IMAGETYPES.AIArt);
              setUrlParams({'tab':'ai'});
              }}>
              <a href='#'>AI Art</a>
            </div>
        </div>
    </div>
  )
}

export default Switcher;