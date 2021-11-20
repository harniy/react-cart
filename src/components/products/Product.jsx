import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  removeQuantity,
  addToCart,
} from "../../feutures/cartSlice";
import "./products.css";

export default function Products({ values, i, productsLength}) {
  const { id, name, price, image, quantity, discount } = values;

  const [priceCount, setPriceCount] = useState(0);

  const { products } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const minusQuantity = (id) => {
    dispatch(removeQuantity(id));
  };

  const plusQuantity = (id) => {
    dispatch(addToCart(...products.filter((prod) => prod.id === id)));
  };

  function productPrice(price, quantity, discount) {
    let sumPrice = price * quantity;

    if (discount) {
      if (quantity >= 3) {
        let count = Math.floor(quantity / 3);
        sumPrice = price * quantity - (price / 2) * count;
      }
      return sumPrice;
    } else {
      return sumPrice;
    }
  }


  useEffect(() => {
    const sumPrice = productPrice(price, quantity, discount);
    setPriceCount(sumPrice);

  }, [products]);


  return (
    <div
      className={
        "cart__product " + (i !== productsLength - 1 ? "cart__border" : "")
      }
    >
      <div className="cart__product-info">
        <img src={image} alt={name} className="cart__product-image" />
        <div className="card__product-detail">
          <p className="cart__product-name">
            Name: <span>{name}</span>
          </p>
          <p className="cart__product-name">
            Price: <span>{price}$</span>
          </p>
          {discount && (
            <p className="cart__product-name discount-text">Discount</p>
          )}
        </div>
      </div>
      <div className="cart__product-quantity">
        <button
          onClick={() => minusQuantity(id)}
          className="cart__product-button"
        >
          -
        </button>
        <p className="cart__product-input">{quantity}</p>
        <button
          onClick={() => plusQuantity(id)}
          className="cart__product-button"
        >
          +
        </button>
      </div>
      <div className="cart__product-total">
        {discount && quantity >= 3 ? (
          <div className="cart__product-discount">
            <span style={{ textDecoration: "line-through", color: "#f44336" }}>
              {price * quantity}$
            </span>
            <span>{priceCount}$</span>
          </div>
        ) : (
          <span>{priceCount}$</span>
        )}
      </div>
      <div
        className="cart__product-remove"
        onClick={() => dispatch(removeFromCart(id))}
        title="remove"
      >
        &#215;
      </div>
    </div>
  );
}
