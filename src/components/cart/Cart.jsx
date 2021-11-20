import React from "react";
import "./cart.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Product from "../products/Product";

export default function Cart() {
  const { products } = useSelector((state) => state.cart);

  const totalSum = products.reduce((sum, el) => {
    let sumPrice = el.price * el.quantity;

    if (el.discount) {
      if (el.quantity >= 3) {
        let count = Math.floor(el.quantity / 3);
        sumPrice = el.price * el.quantity - (el.price / 2) * count;
      }
    } else {
      return (sum += sumPrice);
    }
    return (sum += sumPrice);
  }, 0);

  return (
    <div className="shopping__cart">
      <h1 className="shopping__cart-header">Shopping Cart</h1>
      <div className="shopping__cart-block">
        <ul className="shopping__cart-list">
          <li className="shopping__cart-item prod">Product detail</li>
          <li className="shopping__cart-item qty">quantity</li>
          <li className="shopping__cart-item total">total</li>
        </ul>

        {products.map(({ id, name, price, image, quantity, discount }, i) => (
          <Product
            values={{ id, name, price, image, quantity, discount }}
            i={i}
            productsLength={products.length}
            key={id}
          />
        ))}
        <div className="cart__product-bottom">
          <Link to="/">
            <div className="cart__back">
              <span className="cart__arrow">&#8592;</span> Go back
            </div>
          </Link>
          <div className="total__sum">{totalSum}$</div>
        </div>
      </div>
    </div>
  );
}
