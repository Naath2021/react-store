import React from 'react'
import ProductsMock from "../../../products/ProductsMock"
import ProductDetail from "./ProductDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetailContainer = () => {

    const {index} = useParams();

    const [products, setproduct] = useState([]);

    const getproductDetail = new Promise((resolve) => {
            setTimeout(() => {
                setproduct(ProductsMock.filter(product => product.index === index))
                resolve(ProductsMock)
            }, 2000)
    })
    useEffect(() => {
        getproductDetail.then((response) => {
            setproduct(response)
        })
    })


    return (
        <div>
            <ProductDetail product={products} />
        </div>
    )
}

export default ProductDetailContainer