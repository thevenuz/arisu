import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {Link, Route, Routes} from 'react-router-dom';
import Gallery from './pages/Gallery';
import ShortStories from './pages/ShortStories';
import ShortStoryContent from './components/ShortStories/ShortStoryContent';

function App() {
  return (
    <div className="App bg-main-bg">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/shortstories" element={<ShortStories/>}/>
        <Route path="/ss/:name" element={<ShortStoryContent/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
