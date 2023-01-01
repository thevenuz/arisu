import React from 'react';
import icon from '../assets/images/icon.png'

const Navbar = () => {
  return (
    <div className='flex w-full h-16 font-Outfit shadow-md'>
        <div className='flex w-4/5 mx-auto justify-center'>
            {/* div for icon and title */}
            <div className='flex items-center w-2/12 space-x-1'>
                <div className='align-middle w-1/3 px-2'>
                    <img className='w-14 h-14 rounded-full' src={icon} alt='icon'/>
                </div>
                <div className='align-middle font-bold text-lg leading-tight text-white'>
                    <p>
                        ARISU<br/>
                        SAKAYANAGI
                    </p>
                </div>
            </div>

            {/* div for about, gallery ss etc */}
            <div className='flex-1 items-center justify-end align-middle flex'>
                <div className='flex space-x-4 align-middle px-2 font-medium text-white'>
                    <div className='align-middle'>
                        <p>Home</p>
                    </div>
                    <div className='align-middle'>
                        <p>Gallery</p>
                    </div>
                    <div className='align-middle'>
                        <p>Short Stories</p>
                    </div>
                    <div className='align-middle'>
                        <p>Fanfics</p>
                    </div>
                    <div className='align-middle'>
                        <p>About</p>
                    </div>
                    <div className='align-middle'>
                        <p>Theme</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
