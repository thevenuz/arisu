import React from 'react';
import { IMAGETYPES } from '../../enums/ImageType';

const Switcher = ({activeTab, setActiveTab}) => {

    // Set Active tab state
    const setCurrentTab = (imageType) => {
        setActiveTab(imageType);
    }

  return (
    // This is to switch between different image sources
    <div className='flex w-full items-center align-middle my-6 font-Outfit font-medium'>
        <div className='w-1/3 h-10 rounded-lg flex mx-auto shadow-md'>
            {/* Different Image sources */}
            <div className={`flex-auto flex justify-center align-middle items-center shadow-md ${activeTab === IMAGETYPES.LNIllustrations ? 'bg-highlight rounded-lg text-slate-100' : ''}`}>
                <a href='#' onClick={() => setCurrentTab(IMAGETYPES.LNIllustrations)}>LN Illustrations</a>
            </div>
            <div className={`flex-auto flex justify-center align-middle items-center shadow-md ${activeTab === IMAGETYPES.OfficialArt ? 'bg-highlight rounded-lg text-slate-100' : ''}`}>
                <a href='#' onClick={() => setCurrentTab(IMAGETYPES.OfficialArt)}>Official Art</a>
            </div>
            <div className={`flex-auto flex justify-center align-middle items-center shadow-md ${activeTab === IMAGETYPES.Fanart ? 'bg-highlight rounded-lg text-slate-100' : ''}`}>
                <a href='#' onClick={() => setCurrentTab(IMAGETYPES.Fanart)}>Fanart</a>
            </div>
            <div className={`flex-auto flex justify-center align-middle items-center shadow-md ${activeTab === IMAGETYPES.Comics ? 'bg-highlight rounded-lg text-slate-100' : ''}`}>
                <a href='#' onClick={() => setCurrentTab(IMAGETYPES.Comics)}>Comics</a>
            </div>
        </div>
    </div>
  )
}

export default Switcher;