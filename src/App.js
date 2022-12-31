import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-blue-300">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
