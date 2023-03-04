import React from 'react';
import { Link} from "react-router-dom";

const HamburgerMenu = ({ isMobileNavbarOpen = false, setIsMobileNavbarOpen}) => {

    // const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <div className={`flex items-center justify-between md:hidden`}>
      <div className={`space-y-2 `} onClick={() => setIsMobileNavbarOpen((prev) => !prev)}>
        <span className="block h-0.5 w-6 animate-pulse bg-slate-100"></span>
        <span className="block h-0.5 w-6 animate-pulse bg-slate-100"></span>
        <span className="block h-0.5 w-6 animate-pulse bg-slate-100"></span>
      </div>

      {/* New hamburger */}
      <div className={`absolute top-0 left-0 z-0 bg-black h-screen w-full flex flex-col justify-items-center origin-top animate-open-menu ${isMobileNavbarOpen ? '' : 'hidden'}`}>
          <button className='text-8xl self-end px-6' onClick={()=>setIsMobileNavbarOpen((prev) => !prev)}>
            &times;
          </button>
          <nav className="flex flex-col min-h-screen items-center py-8 space-y-3">
          <Link to='/' onClick={()=>setIsMobileNavbarOpen((prev) => !prev)}>
              <p>Home</p>
          </Link>
          <Link to='/gallery' onClick={()=>setIsMobileNavbarOpen((prev) => !prev)}>
              <p>Gallery</p>
          </Link>
          <Link to='/shortstories' onClick={()=>setIsMobileNavbarOpen((prev) => !prev)}>
              <p>Short Stories</p>
          </Link>
          <Link to='/fanfics' onClick={()=>setIsMobileNavbarOpen((prev) => !prev)}>
              <p>Fanfics</p>
          </Link>
          <Link to='/about' onClick={()=>setIsMobileNavbarOpen((prev) => !prev)}>
              <p>About</p>
          </Link>
          </nav>
      </div>

    </div>
  );
}

export default HamburgerMenu;
