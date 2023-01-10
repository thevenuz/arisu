import React, { useState } from 'react';
import { Link} from "react-router-dom";
import icon from '../assets/images/icon.png'
import { PAGES } from '../enums/Pages';

const Navbar = () => {

  // State for the active tab
  const [activePage, setActivePage] = useState(PAGES.HOME)

  const setCurrentPage = (page) => {
    setActivePage(page);
  }

  return (
    <div className='flex w-full h-16 font-Outfit shadow-md'>
        <div className='flex w-4/5 mx-auto justify-center'>
            {/* div for icon and title */}
            <div className='flex items-center w-2/12 space-x-1'>
                <div className='align-middle w-1/3 px-2'>
                    <img className='w-14 h-14 rounded-full' src={icon} alt='icon'/>
                </div>
                <div className='align-middle font-bold text-xl leading-tight text-white'>
                    <Link to="/">
                    <p>
                        ARISU-CAMP
                    </p>
                    </Link>
                        
                </div>
            </div>

            {/* div for about, gallery ss etc */}
            <div className='flex-1 items-center justify-end align-middle flex'>
                <div className='flex space-x-4 align-middle px-2 font-medium text-white'>
                    <div className='align-middle'>
                        <Link to="/" className={`align-middle ${activePage===PAGES.HOME ? 'text-accent drop-shadow-lg font-bold' : 'text-white'}`}  onClick={() => setCurrentPage(PAGES.HOME)}>
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className='align-middle'>
                        <Link to="/gallery" className={`align-middle ${activePage===PAGES.GALLERY ? 'text-accent drop-shadow-lg font-bold' : 'text-white'}`} onClick={() => setCurrentPage(PAGES.GALLERY)}>
                            <p>Gallery</p>
                        </Link>
                    </div>
                    <div className='align-middle'>
                        <Link to="/shortstories" className={`hover:text-accent ${activePage===PAGES.SHORTSTORIES ? 'text-accent' : 'text-white'}`} onClick={() => setCurrentPage(PAGES.SHORTSTORIES)}>
                            <p>Short Stories</p>
                        </Link>
                    </div>
                    <div className='align-middle'>
                        <Link to="/fanfics" className={`hover:text-accent ${activePage===PAGES.FANFICS ? 'text-accent' : 'text-white'}`} onClick={() => setCurrentPage(PAGES.FANFICS)}>
                            <p>Fanfics</p>
                        </Link>
                    </div>
                    <div className='align-middle'>
                        <Link to="/about" className={`hover:text-accent ${activePage===PAGES.ABOUT ? 'text-accent' : 'text-white'}`} onClick={() => setCurrentPage(PAGES.ABOUT)}>
                            <p>About</p>
                        </Link>
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
