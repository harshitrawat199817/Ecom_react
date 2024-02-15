import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Productcard from '../ProductCard/productcard';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';

function ProductList({selectedCategory}) {

    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        console.log("selectedCategory:", selectedCategory);
        axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`).then((response) => {
            setProducts(response.data);
            console.log("API response:", response.data);
        });
    }, [selectedCategory]);

    return (
        <Row xs="auto"  className="g-4">
            {products.map((product) => {
                return <Col><Productcard product={product} key={product.id} /></Col>;
            })}
        </Row>
    );
}

export default ProductList