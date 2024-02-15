import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';

function App() {
  return (
    <Routes>
      <Route path = '/' Component={Home}/>
      <Route path = '/home' Component={Home}/>
      <Route path = '/about' Component={About}/>
      <Route path = '*' Component={Error}/>
    </Routes>
  );
}

export default App;
