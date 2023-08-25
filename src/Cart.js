import { useContext } from "react";
import { Cartcontext } from "./Context";
const Cart = () => {
  const UserState = useContext(Cartcontext);
  const state = UserState.state;
  const dispatch = UserState.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {state.map((item, index) => {
        return (
          <div className="box" key={index}>
           
            <p>{item.title}</p>
            <img src={item.image} alt="" />
            <p>{item.quantity * item.price}</p>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              <button>Remove</button>
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>{total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
