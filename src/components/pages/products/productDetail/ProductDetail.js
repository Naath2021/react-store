import React from 'react'
import Counter from '../../../counter/Counter'
import { AddToCart } from '../../../buttons/buttons'
import Navbar from "../../../navbar/Navbar"
import ProductDetailContainer from './ProductDetailContainer'


function ProductDetail({product}) {
  return (
    <>
      <div>
        <Navbar/>
        <div>
          <div className='detail-img'>
            <img src={product.image} alt={product.name}/>
          </div>
          <div className='detail.info'>
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <h3>{product.description}</h3>
            <h3>Cantidad: <br/> <Counter /></h3>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail