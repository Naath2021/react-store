
import ProductsCard from "../products-card/ProductsCard";

const ProductList = ({ list }) => {
    list.map((product) => (
        console.log(product.image)
    ))
    return (
        <div>
            {
                list.map((product) => (
                    <ProductsCard
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                ))
            }
        </div>
    )
}

export default ProductList