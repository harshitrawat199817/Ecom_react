import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Function representing the navigation bar component.
 *
 * @return {JSX.Element} The navigation bar component JSX element.
 */
function NavBar({ setSelectedCategory , isLogin}) {

  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories').then((response) => {
      setCategories(response.data)
      console.log(response.data)
    })
  },[])
  

  
  const [cartquantity, setcartquantity] = useState(0);
  const getcarttotalitems = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      let total = 0
      cart.forEach(item => {
        total += item.quantity
      })
      setcartquantity(total)
    }
    else {
      setcartquantity(0)
    }
  }

  useEffect(() => {
    getcarttotalitems()
  }, [])

  


  return (
    <div className='container justify-content-center'>
      <div className='s1'>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="mr-auto">
              <Form inline className='d-inline-flex ml-centre'>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          {/* </Navbar.Collapse> */}
          <div>
            <Link to="/cart" className='btn btn-primary'>Cart ({cartquantity})</Link>
          </div>
          <div>
            <Dropdown title="Dropdown" id="basic-nav-dropdown">
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {isLogin ? 'Logout': 'Login/Signup'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {!isLogin ?

                  (
                    <>
                      <Dropdown.Item href="login">Login</Dropdown.Item>
                      <Dropdown.Item href="signup">Signup</Dropdown.Item>
                    </>
                  )

                  :
                  (
                    <>
                      <Dropdown.Item href="logout">Logout</Dropdown.Item>
                      <Dropdown.Item href="signup">Profile</Dropdown.Item>
                    </>
                  )
                }
              </Dropdown.Menu>
            </Dropdown>

          </div>
        </Navbar>
      </div>
      <div className='s2 '>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="home">MyShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
            <Nav className="mr-auto" >
              <NavDropdown title="Categories" id="basic-nav-dropdown">

                {Categories.map((category) => (
                  <NavDropdown.Item onClick={()=>setSelectedCategory(category)} >{category}</NavDropdown.Item>
                ))}
                
              </NavDropdown>
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    </div>
  )
}

export default NavBar