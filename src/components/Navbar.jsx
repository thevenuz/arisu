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
    <div className='flex w-full h-32 font-Heading shadow-md sticky top-0'>
        <div className='flex w-4/5 mx-auto justify-center'>
            {/* div for icon and title */}
            <div className='flex items-center w-2/12 space-x-1 '>
                <div className='align-middle w-1/3 px-2'>
                    <img className='w-14 h-14 rounded-full' src={icon} alt='icon'/>
                </div>
                <div className='align-middle font-bold text-xl leading-tight text-main-text'>
                    <Link to="/">
                    <p className='font-Heading'>
                        ARISU-CAMP
                    </p>
                    </Link>
                        
                </div>
            </div>

            {/* div for about, gallery ss etc */}
            <div className='flex-1 items-center justify-end align-middle flex'>
                <div className='flex space-x-4 align-middle px-2 text-base font-Heading font-bold text-main-text'>
                    <div className='align-middle'>
                        <Link to="/" className={`align-middle underline-hover relative ${activePage===PAGES.HOME ? 'underline underline-offset-8 decoration-3 decoration-accent-bar' : ' '}`}  onClick={() => setCurrentPage(PAGES.HOME)}>
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className='align-middle'>
                        <Link to="/gallery" className={`align-middle underline-hover relative ${activePage===PAGES.GALLERY ? 'underline underline-offset-8 decoration-3 decoration-accent-bar' : ''}`} onClick={() => setCurrentPage(PAGES.GALLERY)}>
                            <p>Gallery</p>
                        </Link>
                    </div>
                    <div className='align-middle'>
                        <Link to="/shortstories" className={`align-middle underline-hover relative ${activePage===PAGES.SHORTSTORIES ? 'underline underline-offset-8 decoration-3 decoration-accent-bar' : ''}`} onClick={() => setCurrentPage(PAGES.SHORTSTORIES)}>
                            <p>Short Stories</p>
                        </Link>
                    </div>
                    <div className='align-middle'>
                        <Link to="/fanfics" className={`align-middle underline-hover relative ${activePage===PAGES.FANFICS ? 'underline underline-offset-8 decoration-3 decoration-accent-bar' : ''}`} onClick={() => setCurrentPage(PAGES.FANFICS)}>
                            <p>Fanfics</p>
                        </Link>
                    </div>
                    <div className='align-middle'>
                        <Link to="/about" className={`align-middle underline-hover relative ${activePage===PAGES.ABOUT ? 'underline underline-offset-8 decoration-3 decoration-accent-bar' : ''}`} onClick={() => setCurrentPage(PAGES.ABOUT)}>
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
