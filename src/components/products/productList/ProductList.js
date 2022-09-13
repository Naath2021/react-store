
import ProductsCard from "../products-card/ProductsCard";
import { Link } from "react-router-dom";

const ProductList = ({ list }) => {
    list.map((product) => (
        console.log(product.image)
    ))
    return (
        <div className="product-container">
            {
                list.map((product) => (
                    <Link key={product.id} to={"item/" + product.index} element={"hello world"} style={{ textDecoration: "none", listStyleType: "none", listStyle: "none", color: "rgb(34, 34, 34)" }}>
                        <ProductsCard
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default ProductList