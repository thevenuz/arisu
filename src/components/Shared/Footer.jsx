import React, {memo} from 'react';
import { Link } from 'react-router-dom';

const Footer = memo(() => {
  return (
    // Footer
    <div className="flex flex-wrap w-full mx-auto pb-4 pt-2 px-10 justify-between text-sm">
      {/* Title and Icon */}

      <div className="flex-col flex w-4/12 space-x-1">
        <div className="align-middle px-2">
          <Link to='/'>
            <img className="w-10 md:w-16 h-10 md:h-16 rounded-full" src='/images/Assets/icon.png' alt="icon" />
          </Link>
        </div>
        <div className="align-middle font-bold text-base md:text-lg mt-2 leading-tight font-Heading">
          <Link to='/'>
            <p>ARISU-CAMP</p>
          </Link>
        </div>
      </div>

      {/* Links to other pages */}
      <div className="items-center align-middle text-xs md:text-sm font-semibold mt-4 flex">
        <div className="flex-col align-middle items-center space-y-1">
          <div className="px-2">
            <Link to='/gallery'>
              <p className='hover:opacity-80'>Gallery</p>
            </Link>
          </div>
          <div className="px-2">
            <Link to='/fanfics'>
              <p className='hover:opacity-80'>Fanfics</p>
            </Link>
          </div>
          <div className="px-2">
            <Link to='/shortstories'>
              <p className='hover:opacity-80'>Short Stories</p>
            </Link>
            
          </div>
          <div className="px-2">
            <Link to='/about'>
              <p className='hover:opacity-80'>About</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Extra meta data */}
      <div className="flex items-center align-middle text-xs md:text-sm font-semibold mt-4 pr-6">
        <div className="flex-col align-middle items-center">
          <div className='align-middle'>
          <a target='_blank' href='https://github.com/thevenuz/arisu' title='Guthub repo' className='align-middle flex'>
            <svg xmlns="http://www.w3.org/2000/svg" stroke='currentColor' fill='currentColor' width="18" height="18" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className='ml-2 hover:opacity-80'>Github</span>
            </a>
          </div>
          <div className='my-2'>
            <p>&#169; 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;