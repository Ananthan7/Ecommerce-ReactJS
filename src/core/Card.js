import React from 'react'
import Imagehelper from './helper/Imagehelper'
//todo
const isAuthenticated = true

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false,
    
}) => {
    const cartTitle = product ? product.name : "Default name"
    const cartDescription = product ? product.description : "Default description"
    const cartPrice = product ? product.price : "Default price"

    const addToCart = () =>{
        if(isAuthenticated){
            console.log("added to cart");
        } else {
            console.log("Login please");
        }
    };
    return (
        <div>
            <div className="card" style={{width: "18rem", color:"black"}}>
                <div className="card-header lead">{cartTitle}</div>
                    <Imagehelper product={product}/>
                <div className="card-body">
                    <h5 className="card-title">₹ {cartPrice}</h5>
                    <p className="card-text">{cartDescription}</p>
                    <button href="#" className="btn btn-primary">Add to cart</button>
                    <button href="#" className="btn btn-danger mt-2">Remove from cart</button>
                </div>
            </div>
        </div>
    )
}
export default Card;