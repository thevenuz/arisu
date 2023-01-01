import React from 'react';

const Switcher = () => {
  return (
    // This is to switch between different image sources
    <div className='flex w-full items-center align-middle my-6 font-Outfit font-medium'>
        <div className='w-1/3 h-10 rounded-lg flex mx-auto shadow-md'>
            {/* Different Image sources */}
            <div className='flex justify-center align-middle items-center shadow-md bg-highlight rounded-lg'>
                <div className='flex flex-auto mx-auto justify-center items-center'>
                    <p className='px-4'>LN Illustrations</p>
                </div>
            </div>
            <div className='flex-auto flex justify-center align-middle items-center shadow-md'>
                <p>Official Art</p>
            </div>
            <div className='flex-auto flex justify-center align-middle items-center shadow-md'>
                <p>Fanart</p>
            </div>
            <div className='flex flex-auto justify-center align-middle items-center shadow-md'>
                <p>Comics</p>
            </div>
        </div>
    </div>
  )
}

export default Switcher;