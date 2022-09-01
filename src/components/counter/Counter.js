import React, { useState } from "react"

const Counter = () => {
    const [items, setitems] = useState(0)

    const AddItem = () => setitems(items + 1)
    const RemoveItem = () => items > 1 ? setitems(items - 1) : alert("Acción inválida.")

    return (
        <div className="btn-add-items-to-cart-container">
            <button href="#top" className="btn btn-primary btn-add-substract" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={RemoveItem}>-</button>
            <h2 className="itemQty">{items}</h2>
            <button href="#top" className="btn btn-primary btn-add-substract" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={AddItem}>+</button>
        </div>
    )
}

export default Counter