import React, {/* useState */} from 'react'
import { Route, Routes } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import Slider from '../../Components/Slider/Slider';
import ProductList from '../../Components/ProductList/ProductList';
import NavBarOne from '../../Components/NavBarOne/NavBarOne';
import Login from '../Login/Login';
// import { Outlet } from 'react-router-dom';

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
const Home = () => {

  // const [selectedCategory, setSelectedCategory] = useState('electronics');

  // useEffect(() => {

  // })

  return (
    <div>
      <NavBarOne isLogin={false} />

      <NavBar />
      
      {/* <Slider/> */}

      <Routes>
        <Route index element = {<Slider />}/>
        <Route path=":category" element={<ProductList />} />
      </Routes>
      <Login/>

    </div>
  )
}

export default Home