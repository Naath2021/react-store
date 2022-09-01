import product1 from "../../assets/product1.jpg"
import product2 from "../../assets/product2.jpg"
import product3 from "../../assets/product3.jpg"
import product4 from "../../assets/product4.jpg"
import Counter from "../counter/Counter"

const ItemListContainer = (props) => {
  return (
    <div>
      <h1 className="title">LA COLGADA</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4 cards-container" >
        <div className="col">
          <div className="card">
            <img src={product1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Counter/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={product2} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Counter/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={product3} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <Counter/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={product4} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Counter/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;