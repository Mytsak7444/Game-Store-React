import React from "react";
import { calcTotalPrice } from "../../utils";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import s from "./cartMenu.module.css";

function CartMenu({ items, onClick }) {
  return (
    <div className={s.cart__menu}>
      <div className={s.cart__menu__games__list}>
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                title={game.title}
                price={game.price}
                id={game.id}
              />
            ))
          : "Кошик пустий"}
      </div>
      {items.length > 0 ? (
        <div className={s.cart__menu__arrange}>
          <div className={s.cart__menu__total__price}>
            <span>Сума: </span>
            <span>{calcTotalPrice(items)}грн</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформити заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default CartMenu;
