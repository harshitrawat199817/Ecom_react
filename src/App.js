import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './Context/AuthContext/AuthProvider';
// import ProductList from './Components/ProductList/ProductList';

function App() {
  return (
    <AuthProvider >
    <Routes>
      <Route path = '/' exact element = {<Home/>}/>
      <Route path = '/home/*' element = {<Home/>}/>
      <Route path = '/about' element={<About/>}/>
      <Route path = '/login' element={<Login/>}/>
      <Route path = '/signup' element={<SignUp/>}/>
      <Route path = '*' Component={Error}/>
    </Routes>
    </AuthProvider>
  );
}

export default App;
