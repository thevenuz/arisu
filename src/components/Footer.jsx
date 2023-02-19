import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/images/icon.png';

const Footer = () => {
  return (
    // Footer
    <div className="flex w-full mx-auto py-6 px-10 justify-between text-sm">
      {/* Title and Icon */}

      <div className="flex-col flex w-4/12 space-x-1">
        <div className="align-middle px-2">
          <Link to='/'>
            <img className="w-20 h-20 rounded-full" src={icon} alt="icon" />
          </Link>
        </div>
        <div className="align-middle font-bold text-lg mt-2 leading-tight font-Heading">
          <Link to='/'>
            <p>ARISU-CAMP</p>
          </Link>
        </div>
      </div>

      {/* Links to other pages */}
      <div className="items-center align-middle font-semibold mt-4 flex">
        <div className="flex-col align-middle items-center space-y-1">
          <div className="px-2">
            <Link to='/gallery'>
              <p className='underline underline-offset-3 hover:decoration-accent-bar hover:decoration-3 hover:font-bold'>Gallery</p>
            </Link>
          </div>
          <div className="px-2">
            <Link to='/fanfics'>
              <p className='underline underline-offset-3 hover:decoration-accent-bar hover:decoration-3 hover:font-bold'>Fanfics</p>
            </Link>
          </div>
          <div className="px-2">
            <Link to='/shortstories'>
              <p className='underline underline-offset-3 hover:decoration-accent-bar hover:decoration-3 hover:font-bold'>Short Stories</p>
            </Link>
            
          </div>
          <div className="px-2">
            <Link to='/about'>
              <p className='underline underline-offset-3 hover:decoration-accent-bar hover:decoration-3 hover:font-bold'>About</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Extra meta data */}
      <div className="flex items-center align-middle font-semibold mt-4 pr-6">
        <div className="flex-col align-middle items-center">
          <div>
            <p>metadata</p>
          </div>
          <div>
            <p>meta data 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;