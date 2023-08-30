


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [cart, setcart] = useState([]);

  function addCart(value) {
    if (!cart.some(item => item.cartvalue.id === value.id)) {
      setcart([...cart, { cartvalue: value }]);
    } else {
      alert("Product already in cart");
    }
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setdata(response.data);
    });
  }, []);

  return (
    <>
      <div className="cart-box">
        <button onClick={() => navigate("/cart", { state: { value: cart } })}>
          CART
        </button>
        {cart.length}
      </div>
      <div className="cards_div">
        {data.map((value) => {
          return (
            <div className="card" key={value.id}>
              <h4>{value.title}</h4>
              <img
                src={value.image}
                style={{ width: "250px", height: "250px" }}
                alt=""
              />
              <h6>{value.description}</h6>
              <h2>{value.price}</h2>
              <div>
                <button
                  onClick={() => {
                    addCart(value);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
