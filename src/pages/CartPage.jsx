import React from "react";
import Cart from "../components/cart/Cart";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function CartPage() {
  const userCart = useSelector((state) => state.cart.products);

  return (
    <div className="cart__section">
      {userCart.length !== 0 ? (
        <Cart />
      ) : (
        <div className="empty__cart  shopping__cart-block">
            <p className="empty__cart-title" >Cart is empty</p>
            <div className="cart__product-bottom">
          <Link to="/">
            <div className="cart__back">
              <span className="cart__arrow">&#8592;</span> Go back
            </div>
          </Link>
        </div>
        </div>
      )}
    </div>
  );
}
