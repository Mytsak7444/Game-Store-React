import React from "react";
import GameImg from "../GameImg/GameImg";
import s from "./orderItem.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../Redux/cart/reducer";

function OrderItem({ game }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className={s.order__item}>
      <div className={s.order__item__img}>
        <GameImg image={game.image} />
      </div>
      <div className={s.order__item__title}>
        <span>{game.title}</span>
      </div>
      <div className={s.order__item__price}>
        <span>{game.price} грн</span>
        <AiOutlineCloseCircle
          size={25}
          className={s.item__delete__icon}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default OrderItem;
