import React, { useCallback, useState } from "react";
import s from "./cartBlock.module.css";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utils";
import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import { useNavigate } from "react-router-dom";

function CartBlock() {
  const [isCartMenuIsVisible, setIsCartMenuIsVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuIsVisible(false);
    navigate("/Game-Store-React/order");
  }, [navigate]);

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
      {isCartMenuIsVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
}

export default CartBlock;
