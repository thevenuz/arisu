import Home from './pages/Home';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Gallery from './pages/Gallery';
import ShortStories from './pages/ShortStories';
import ShortStoryContent from './components/ShortStories/ShortStoryContent';
import Fanfics from './pages/Fanfics';
import About from './pages/About';
import { useState } from 'react';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(()=>false);

  return (
    <div className="App flex flex-col h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gradient-from via-gradient-to to-gradient-from">
    
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/shortstories" element={<ShortStories/>}/>
        <Route path="/ss/:name" element={<ShortStoryContent/>}/>
        <Route path="/fanfics" element={<Fanfics/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    
    </div>
    
  );
}

export default App;
