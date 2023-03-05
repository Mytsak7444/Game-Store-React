import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../Redux/cart/reducer";

import Button from "../Button/Button";
import s from "./gameBuy.module.css";

function GameBuy({ game }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className={s.game__buy}>
      <span className={s.game__buy__price}>{game.price} грн</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Забрати з корзини" : "В корзину"}
      </Button>
    </div>
  );
}

export default GameBuy;
