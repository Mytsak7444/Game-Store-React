import React, { useState } from "react";
import s from "./cartBlock.module.css";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utils";
import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../ItemsInCart/ItemsInCart";

function CartBlock() {
  const [isCartMenuIsVisible, setIsCartMenuIsVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className={s.cart__block}>
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className={s.cart__block__icon}
        onClick={() => setIsCartMenuIsVisible(!isCartMenuIsVisible)}
      />
      {totalPrice > 0 ? (
        <span className={s.cart__block__total__price}>{totalPrice}грн</span>
      ) : null}
      {isCartMenuIsVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
}

export default CartBlock;
