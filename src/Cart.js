


import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
    const location=useLocation();
    const product=location.state.value;
  
    console.log(product)
  return (
    <>
    <div>
        
        <h1>Buy Products</h1>
        <button>Buy All</button>
        {product.map((value)=>{
          return(
            <div className="cart__2">
                 <p>{value.cartvalue.title}</p>
                 <img src={value.cartvalue.image} width="50px" height="50px"/>
                 <p>{value.cartvalue.price}</p>
                 </div>


          )
        })



        }
       
    </div>
    </>
  )
}

export default Cart
