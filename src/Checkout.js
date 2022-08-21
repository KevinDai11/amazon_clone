import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  if (!user) {
    return (
      <div className="checkout">
        <div className="checkout__login">
          <h1>You must be logged in to checkout</h1>
          <p>
            <a href="/login">Login</a>
          </p>
        </div>
      </div>
    ); 
  }
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user.email}</h3>
          <h2 className="checkout__title">Your shopping Cart</h2>

          {cart.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              count = {item.count}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;