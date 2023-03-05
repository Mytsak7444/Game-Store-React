import React from "react";
import s from "./cartBlock.module.css";
import { BiCartAlt } from "react-icons/bi";

function CartBlock() {
  return (
    <div className={s.cart__block}>
      <BiCartAlt size={25} className={s.cart__block__icon} />
      <span className={s.cart__block__total__price}>550 грн</span>
    </div>
  );
}

export default CartBlock;
