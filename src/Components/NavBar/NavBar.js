import React, { memo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Function representing the navigation bar component.
 *
 * @return {JSX.Element} The navigation bar component JSX element.
 */
function NavBar() {

  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories').then((response) => {
      setCategories(response.data)
    })
  }, [])

  return (



    <Navbar bg="light" expand="md">

      <Navbar.Brand className='justify-content-center' href="home">MyShop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-left'>


        <Nav variant='underline' className="justify-content-center">
          {Categories.map((category) => (
            <Nav.Item>
              <NavLink  className="nav-link" to={`/home/${category}`}>{category}</NavLink>
            </Nav.Item>
          ))}
          <Form inline className='d-inline-flex ml-centre'>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


  )
}

export default memo(NavBar)