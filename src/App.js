import Home from './pages/Home';
import Navbar from './components/Shared/Navbar';
import {Route, Routes} from 'react-router-dom';
import Gallery from './pages/Gallery';
import ShortStories from './pages/ShortStories';
import ShortStoryContent from './components/ShortStories/ShortStoryContent';
import Fanfics from './pages/Fanfics';
import About from './pages/About';
import { useState } from 'react';
import { useEffect } from 'react';
import { PAGES } from './enums/Pages';

function App() {

  const [activePage, setActivePage] = useState(PAGES.HOME);

  const [isDarkMode, setIsDarkMode] = useState(()=>{
    const darkModeFromStorage = localStorage.getItem('DarkMode');

    return darkModeFromStorage !== null ? JSON.parse(darkModeFromStorage) : false;
  });

  // Save Dark Mode/Light Mode in local storage

  useEffect(() => {
    localStorage.setItem('DarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode])

  return (
    <div className={`App flex flex-col h-screen 
      ${isDarkMode ? 'bg-main-text text-slate-50' : 
      'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gradient-from via-gradient-to to-gradient-from' }
    `}>
    
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} activePage={activePage} setActivePage={setActivePage}/>
    
    <Routes>
        <Route path="/" element={<Home setActivePage={setActivePage}/>}/>
        <Route path="/gallery" element={<Gallery isDarkMode={isDarkMode} setActivePage={setActivePage}/>} />
        <Route path="/shortstories" element={<ShortStories setActivePage={setActivePage}/>}/>
        <Route path="/ss/:name" element={<ShortStoryContent setActivePage={setActivePage}/>}/>
        <Route path="/fanfics" element={<Fanfics setActivePage={setActivePage}/>}/>
        <Route path="/about" element={<About setActivePage={setActivePage}/>}/>
    </Routes>
    
    </div>
    
  );
}

export default App;
