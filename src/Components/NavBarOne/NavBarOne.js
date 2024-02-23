import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar, Nav,  Dropdown } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs'



function NavBarOne({ isLogin }) {

    const [cartquantity, setcartquantity] = useState(0);
    

    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts/5').then((response) => {

            // console.log(response.data.products.length);

            
            setcartquantity(response.data.products.length);
            console.log("cartquantity", cartquantity);
        })
    }, [cartquantity]);
    return (
        <Navbar bg="light" expand={true} >
            <Nav variant='unstyle' className='justify-content-left'>
                <Nav.Link className='ml-auto' href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav className="ml-auto" variant='unstyle'  >
                <Nav.Link to="/cart" className='justify-content-end'><BsCart size={20} />({cartquantity})</Nav.Link>
                <Dropdown title="Dropdown" id="basic-nav-dropdown" >
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        {isLogin ? 'Logout' : 'Login/Signup'}
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
                                    <Dropdown.Item href="profile">Profile</Dropdown.Item>
                                    <Dropdown.Item href="logout">Logout</Dropdown.Item>
                                </>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>


        </Navbar>
    )
}

export default React.memo(NavBarOne)