import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductDetails = ({products , match}) => {
   let produit =products.find(el=>  Number(el.id) ===  Number(match.params.id)  )
   console.log(produit)
   console.log(match)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={produit.imgSrc} />
  <Card.Body>
    <Card.Title>{produit.name}</Card.Title>
    <Card.Text>{produit.price}</Card.Text>
    <Link to="/productlist"> <Button variant="primary">Go Back</Button></Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default ProductDetails
