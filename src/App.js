
import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/stocks' element = {<Dashboard />} />
        <Route path = '/about' element = {<About />}/>
        <Route path = '/stock/:symbol' element = {<Stock />}/>
      </Routes>
    </div>
  );
}

export default App;
