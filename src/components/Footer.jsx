import React from 'react';
import icon from '../assets/images/icon.png';

const Footer = () => {
  return (
    // Footer
    <div className="flex w-full mx-auto py-6 px-10   justify-between">
      {/* Title and Icon */}

      <div className="flex-col flex  w-4/12 space-x-1">
        <div className="align-middle px-2">
          <img className="w-20 h-20 rounded-full" src={icon} alt="icon" />
        </div>
        <div className="align-middle font-bold text-lg mt-2 leading-tight font-Heading">
          <p>ARISU-CAMP</p>
        </div>
      </div>

      {/* Links to other pages */}
      <div className="items-center align-middle font-semibold mt-4 flex">
        <div className="flex-col align-middle items-center">
          <div className="px-2">
            <p>Gallery</p>
          </div>
          <div className="px-2">
            <p>Fanfics</p>
          </div>
          <div className="px-2">
            <p>Short Stories</p>
          </div>
          <div className="px-2">
            <p>About</p>
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