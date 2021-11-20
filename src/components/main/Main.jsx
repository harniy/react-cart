import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import carIcon from "../../assets/img/cart.svg";
import { products } from "../../productsData";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../feutures/cartSlice";

export default function Main() {

    const productsInCart = useSelector(state => state.cart)

    const dispatch = useDispatch()


    const addProduct = (id) => {
        dispatch(addToCart(...products.filter(prod => prod.id === id)))
    }


  return (
    <div className="container">
      <header className="header">
        <div className="header__cart-block">
          <Link to="/cart">
            <img src={carIcon} alt="cart icon" className="header__cart-icon" />
            <span className="header__cart-quantity">{productsInCart.products.length}</span>
          </Link>
        </div>
      </header>
      <main className="product__section">
        {products.map(({ name, price, discount, image, id }) => (
          <div className="product__card" key={id}>
            <img src={image} alt={name} className="product__card-image" />
            <p className="product__card-name">{name}</p>
            {discount && <p className="product__card-discount">discount</p>}
            <p className="product__card-price">{price}$</p>
            <p className="product__card-add" onClick={() => addProduct(id)}>add to cart</p>
          </div>
        ))}
      </main>
    </div>
  );
}
