import React from "react";
import s from "./cartItem.module.css";

function CartItem({ title, price }) {
  return (
    <div className={s.cart__item}>
      <span>{title}</span>
      <div className={s.cart__item__price}>
        <span>{price}грн</span>
      </div>
    </div>
  );
}

export default CartItem;
