import axios from 'axios';
import React, { useState, useEffect, memo } from 'react'
import Productcard from '../ProductCard/productcard';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import { Container } from 'react-bootstrap';

function ProductList() {

    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        if (category === undefined) {
            axios.get(`https://fakestoreapi.com/products`).then((response) => {
                setProducts(response.data);
                console.log("API response All:", response.data);
            })
        }
        else {
            axios.get(`https://fakestoreapi.com/products/category/${category}`).then((response) => {
                setProducts(response.data);
                console.log("API response category:", response.data);
            })
        }
    }, [category]);

    return (
        <Row xs="auto" className="g-4">
            {products.map((product) => {
                return <Col key={product.id}><Productcard product={product} /></Col>;
            })}
        </Row>
    );
}

export default memo(ProductList)