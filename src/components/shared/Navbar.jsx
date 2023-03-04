import React, { useEffect, useState } from 'react';
import { Link} from "react-router-dom";
import {PAGES} from '../../enums/Pages';
import HamburgerMenu from '../Shared/HamburgerMenu';
import DarkModeToggle from 'react-dark-mode-toggle';

const Navbar = ({isDarkMode, setIsDarkMode, activePage = PAGES.HOME, setActivePage, isMobileNavbarOpen=false, setIsMobileNavbarOpen}) => {

  // State

  const [page] = useState(window.location.pathname ?? 'home');
//   const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(() => false);

  useEffect(() => {
    const re = /\/(\w*)/g
    const matchedPage = re.exec(page);
    if(matchedPage && matchedPage[1]){
        console.log(`page matched: ${matchedPage[1]}`)
        switch(matchedPage[1]){
            case 'home':
                setCurrentPage(PAGES.HOME);
                break;
            case 'gallery':
                setCurrentPage(PAGES.GALLERY);
                break;
            case 'shortstories':
            case 'ss':
                setCurrentPage(PAGES.SHORTSTORIES);
                break;
            case 'fanfics':
                setCurrentPage(PAGES.FANFICS);
                break;
            case 'about':
                setCurrentPage(PAGES.ABOUT);
                break;
            default:
                setCurrentPage(PAGES.HOME);
                break;
        }
    }
    else{
        setCurrentPage(PAGES.HOME);
    }
  }, [])
  

  const setCurrentPage = (page) => {
    setActivePage(page);
  }


  return (
    <div className='flex w-full mx-auto h-32 max-h-[72px] min-h-[72px] font-Heading shadow-md sticky top-0'>
      <div className={`flex w-full px-4 md:px-0 lg:w-4/5 md:pl-2 mx-auto justify-center ${isDarkMode ? 'text-slate-50' : 'text-main-text'}`}>
            {/* div for icon and title */}
            <div className='flex items-center lg:w-[210px] space-x-1 '>
                <div className='align-middle md:w-1/3'>
                    <Link to='/'>
                        <img className='w-10 md:w-14 h-10 md:h-14 rounded-full' src='/images/Assets/icon.png' alt='icon'/>
                    </Link>
                </div>
                <div className='align-middle font-bold text-sm lg:text-xl leading-tight'>
                    <Link to='/'>
                    <p className='font-Heading'>
                        ARISU-CAMP
                    </p>
                    </Link>
                </div>
            </div>

            {/* div for about, gallery ss etc */}
            <div className='flex-1 items-center justify-end align-middle hidden md:flex'>
                <div className='flex space-x-4 align-middle px-2 text-base font-Heading font-bold '>
                    <div className='align-middle'>
                    <Link to="/" className={`align-middle underline-hover relative ${activePage === PAGES.HOME ? 'underline underline-offset-8 decoration-3 decoration-accent-bar' : ' '}`} onClick={() => setCurrentPage(PAGES.HOME)}>
                        <p>Home</p>
                    </Link>
                    </div>
                    <div className='align-middle'>
                    <Link
                        to='/gallery'
                        className={`align-middle underline-hover relative ${
                        activePage === PAGES.GALLERY
                            ? 'underline underline-offset-8 decoration-3 decoration-accent-bar'
                            : ''
                        }`}
                        onClick={() => setCurrentPage(PAGES.GALLERY)}>
                        <p>Gallery</p>
                    </Link>
                    </div>
                    <div className='align-middle'>
                    <Link
                        to='/shortstories'
                        className={`align-middle underline-hover relative ${
                        activePage === PAGES.SHORTSTORIES
                            ? 'underline underline-offset-8 decoration-3 decoration-accent-bar'
                            : ''
                        }`}
                        onClick={() => setCurrentPage(PAGES.SHORTSTORIES)}>
                        <p>Short Stories</p>
                    </Link>
                    </div>
                    <div className='align-middle'>
                    <Link
                        to='/fanfics'
                        className={`align-middle underline-hover relative ${
                        activePage === PAGES.FANFICS
                            ? 'underline underline-offset-8 decoration-3 decoration-accent-bar'
                            : ''
                        }`}
                        onClick={() => setCurrentPage(PAGES.FANFICS)}>
                        <p>Fanfics</p>
                    </Link>
                    </div>
                    <div className='align-middle'>
                    <Link
                        to='/about'
                        className={`align-middle underline-hover relative ${
                        activePage === PAGES.ABOUT
                            ? 'underline underline-offset-8 decoration-3 decoration-accent-bar'
                            : ''
                        }`}
                        onClick={() => setCurrentPage(PAGES.ABOUT)}>
                        <p>About</p>
                    </Link>
                    </div>
                    <div className='align-middle flex items-center'>
                    {/* Theme */}
                    <DarkModeToggle
                        className='align-middle'
                        size={40}
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                    />
                    </div>
                </div>
            </div>
            
            <div className='flex flex-1 md:hidden items-center justify-end align-middle space-x-1'>
            <div className='align-middle flex items-center'>
                    {/* Theme */}
                    <DarkModeToggle
                        className='align-middle'
                        size={30}
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                    />
            </div>
            <div>
                <HamburgerMenu isMobileNavbarOpen={isMobileNavbarOpen} setIsMobileNavbarOpen={setIsMobileNavbarOpen}/>
            </div>
                
                
            </div>


        </div>
    </div>
  );
}

export default Navbar;
