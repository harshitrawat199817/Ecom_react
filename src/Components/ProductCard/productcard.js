import axios from 'axios';
import React from 'react'
import { Card, Button } from 'react-bootstrap'




function ProductCard({ product }) {

  // console.log(product)
  // console.log(product.)
  const [quantity, setQuantity] = React.useState(0);

  const submitCart = () => {
    axios.post('https://fakestoreapi.com/carts', {
      productId: product.id,
      quantity: quantity
    })
      .then(function (response) {
        console.log(response);
      })
      .then(setQuantity(0))
  }


  return (
    <Card style={{ width: '18rem', height: '100%' }} >

      <Card.Img variant="top" src={product.image} height={'250px'} width={'100px'} />

      <Card.Body>
        <Card.Title style={{ height: '150px' }}>{product.title}</Card.Title>
        <Card.Text>
          {"Rs." + product.price * 80}
        </Card.Text>
        {quantity === 0 ?
          <Button onClick={() => setQuantity(1)}>Add to cart</Button> :
          <>
            <Button onClick={() => setQuantity(quantity - 1)}>-</Button>
            <span style={{ paddingLeft: '10px', paddingRight: '10px' }}>{quantity}</span>
            <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
            <Button onClick={() => submitCart()}>cart</Button>
          </>
        }
      </Card.Body>

    </Card>
  )
}

export default ProductCard