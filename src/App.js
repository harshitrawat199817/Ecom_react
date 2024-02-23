import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
// import ProductList from './Components/ProductList/ProductList';

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/home/*' element = {<Home/>}/>
      <Route path = '/about' Component={About}/>
      <Route path = '/login' Component={Login}/>
      <Route path = '/signup' Component={SignUp}/>
      <Route path = '*' Component={Error}/>
    </Routes>
  );
}

export default App;
