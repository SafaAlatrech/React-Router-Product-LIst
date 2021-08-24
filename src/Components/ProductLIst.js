import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductLIst = ({products}) => {
    return (
        <div className="row mt-3">
            { products.map((produit,i)=>
                <Card style={{ width: '18rem' }} className="col-md-3 mx-auto">
                <Card.Img variant="top" src={produit.imgSrc} />
                <Card.Body>
                  <Card.Title>{produit.name}</Card.Title>
                  <Link to={`/productlist/${produit.id}`}> <Button variant="primary">Details</Button></Link>
                </Card.Body>
              </Card>)
            }
        </div>
    )
}

export default ProductLIst
