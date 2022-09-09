import ProductsMock from "../ProductsMock"
import ProductList from "../productList/ProductList"
import { useEffect, useState } from "react"

const ProductContainer = () => {

    const [productsInfo, setProductsInfo] = useState([]);

    useEffect(() => {
        getProductsInfo.then((response) => {
            setProductsInfo(response)
        })
    })

    const getProductsInfo = new Promise((resolve) => {
        setTimeout(() => {
            resolve(ProductsMock)
        }, 2000)
    })

    return (
        <div>
            <ProductList list={productsInfo} />
        </div>
    )
}

export default ProductContainer