
import Counter from "../../counter/Counter";


const ProductsCard = ({ image, name, description, price }) => {
    return (
        <div className="col container" >
            <div className="card col-sm-4">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
                    <Counter />
                </div>
            </div>
        </div>
    )
}

export default ProductsCard

