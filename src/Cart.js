

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const [cartProducts, setCartProducts] = useState(location.state.value);

  function handleremove(index) {
    const updatedCart = cartProducts.filter((_, i) => i !== index);
    setCartProducts(updatedCart);
  }

  console.log(cartProducts);

  return (
    <>
      <div>
        <h1>Buy Products</h1>
        <button>Buy All</button>
        {cartProducts.map((value, index) => {
          return (
            <div className="cart__2" key={index}>
              <p>{value.cartvalue.title}</p>
              <img src={value.cartvalue.image} alt={value.cartvalue.title} width="50px" height="50px" />
              <p>{value.cartvalue.price}</p>
              <button onClick={() => handleremove(index)}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;

