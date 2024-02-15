import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import Slider from '../../Components/Slider/Slider';
import ProductList from '../../Components/ProductList/ProductList';

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
const Home = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('electronics');
  
  console.log('Rendering Home component');
  console.log(selectedCategory+" home");
  // useEffect(() => {
    
  // })

  return (
    <div>
      <NavBar setSelectedCategory={setSelectedCategory} isLogin = {false}/>
      {/* <Slider/> */}
      <ProductList selectedCategory={selectedCategory} />

    </div>
  )
}

export default Home