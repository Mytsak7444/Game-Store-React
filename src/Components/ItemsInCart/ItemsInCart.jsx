import React from "react";
import s from "./itemsInCart.module.css";

function ItemsInCart({ quantity = 0 }) {
  return quantity > 0 ? (
    <div className={s.items__in__cart}>{quantity}</div>
  ) : null;
}

export default ItemsInCart;
